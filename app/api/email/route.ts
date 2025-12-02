import { NextRequest, NextResponse } from 'next/server'

// Email storage - in production, integrate with Mailchimp, ConvertKit, or a database
// For Vercel serverless functions, file system is read-only, so we'll use a simple in-memory store
// or integrate with an external service
async function saveEmail(email: string) {
  // TODO: Integrate with your email service provider
  // For now, we'll just validate and return success
  // In production, replace this with:
  
  // Option 1: Mailchimp
  // const response = await fetch('https://us1.api.mailchimp.com/3.0/lists/{list_id}/members', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  // })
  
  // Option 2: ConvertKit
  // const response = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
  // })
  
  // For now, just log (in production, replace with actual service)
  console.log('Email captured:', email)
  
  return { success: true }
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

