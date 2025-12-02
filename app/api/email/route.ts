import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Simple file-based storage for development
// In production, swap this for Mailchimp, ConvertKit, or a database
const EMAIL_STORAGE_PATH = path.join(process.cwd(), 'data', 'emails.json')

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }
}

async function saveEmail(email: string) {
  await ensureDataDir()
  
  let emails: string[] = []
  if (existsSync(EMAIL_STORAGE_PATH)) {
    try {
      const fileContent = await readFile(EMAIL_STORAGE_PATH, 'utf-8')
      emails = JSON.parse(fileContent)
    } catch (error) {
      // If file is corrupted or empty, start fresh
      emails = []
    }
  }

  // Prevent duplicates
  if (!emails.includes(email)) {
    emails.push(email)
    await writeFile(EMAIL_STORAGE_PATH, JSON.stringify(emails, null, 2), 'utf-8')
  }

  return emails
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Basic validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Save email (in production, integrate with Mailchimp/ConvertKit here)
    await saveEmail(email)

    // TODO: Integrate with your email service provider
    // Example for Mailchimp:
    // await fetch('https://us1.api.mailchimp.com/3.0/lists/{list_id}/members', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email capture error:', error)
    return NextResponse.json(
      { error: 'Failed to save email' },
      { status: 500 }
    )
  }
}

