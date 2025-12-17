-- Create enum for user types
CREATE TYPE public.waitlist_user_type AS ENUM ('investor', 'business');

-- Create enum for status
CREATE TYPE public.waitlist_status AS ENUM ('pending', 'contacted', 'converted', 'archived');

-- Create early_access_waitlist table
CREATE TABLE public.early_access_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone_number TEXT NOT NULL,
  user_type waitlist_user_type NOT NULL,
  source TEXT DEFAULT 'waitlist_page',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  referrer_url TEXT,
  status waitlist_status DEFAULT 'pending' NOT NULL,
  notes TEXT
);

-- Create index on email for faster duplicate checks
CREATE INDEX idx_waitlist_email ON public.early_access_waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON public.early_access_waitlist(created_at DESC);

-- Create index on user_type for filtering
CREATE INDEX idx_waitlist_user_type ON public.early_access_waitlist(user_type);

-- Create index on status for filtering
CREATE INDEX idx_waitlist_status ON public.early_access_waitlist(status);

-- Enable Row Level Security
ALTER TABLE public.early_access_waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (public form submissions)
CREATE POLICY "Anyone can submit to waitlist"
ON public.early_access_waitlist
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Only authenticated admins can read (future admin panel)
-- For now, we'll use service role for admin access
CREATE POLICY "Service role can read all waitlist entries"
ON public.early_access_waitlist
FOR SELECT
TO service_role
USING (true);

-- Policy: Only service role can update (admin operations)
CREATE POLICY "Service role can update waitlist entries"
ON public.early_access_waitlist
FOR UPDATE
TO service_role
USING (true);

-- Policy: Only service role can delete
CREATE POLICY "Service role can delete waitlist entries"
ON public.early_access_waitlist
FOR DELETE
TO service_role
USING (true);