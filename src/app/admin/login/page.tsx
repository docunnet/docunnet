'use client'

import React, { useState, useTransition } from 'react'
import { ShieldCheck, Mail, Lock, LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { loginAdmin } from '../actions'

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await loginAdmin(formData)
      if (result?.error) {
        // Map English Supabase errors to French
        const errorMap: Record<string, string> = {
          'Invalid login credentials': 'Email ou mot de passe incorrect.',
          'Email not confirmed': 'Veuillez confirmer votre email avant de vous connecter.',
          'Too many requests': 'Trop de tentatives. Veuillez patienter quelques minutes.',
        }
        setError(errorMap[result.error] ?? result.error)
      }
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-10rem',
          left: '-10rem',
          width: '40rem',
          height: '40rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10rem',
          right: '-10rem',
          width: '40rem',
          height: '40rem',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(51, 65, 85, 0.8)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          }}
        >
          {/* Logo + Title */}
          <div className="text-center mb-8">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                borderRadius: '1rem',
                marginBottom: '1rem',
                boxShadow: '0 0 30px rgba(37,99,235,0.4)',
              }}
            >
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              DOCUNET <span className="text-blue-500 text-sm align-top font-semibold">ADMIN</span>
            </h1>
            <p className="mt-2 text-slate-400 text-sm">
              Panneau d&apos;administration — Accès restreint
            </p>
          </div>

          {/* Separator */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(51,65,85,0.8), transparent)',
              marginBottom: '2rem',
            }}
          />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium text-slate-300 mb-2">
                Adresse e-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-slate-500" />
                </div>
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  defaultValue="okomba500@gmail.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(51, 65, 85, 0.8)',
                  }}
                  placeholder="admin@docunet.cd"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(51,65,85,0.8)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-slate-300 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-slate-500" />
                </div>
                <input
                  id="admin-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl text-sm text-white placeholder-slate-500 outline-none transition-all"
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid rgba(51, 65, 85, 0.8)',
                  }}
                  placeholder="••••••••"
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#3b82f6'
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(51,65,85,0.8)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
                <button
                  type="button"
                  id="toggle-password-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                className="flex items-start gap-3 p-4 rounded-xl text-sm"
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#fca5a5',
                }}
              >
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              id="admin-login-submit"
              type="submit"
              disabled={isPending}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                borderRadius: '0.75rem',
                background: isPending
                  ? 'rgba(37,99,235,0.6)'
                  : 'linear-gradient(135deg, #2563eb, #4f46e5)',
                color: 'white',
                fontWeight: '600',
                fontSize: '0.875rem',
                border: 'none',
                cursor: isPending ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: isPending ? 'none' : '0 4px 15px rgba(37,99,235,0.4)',
                transition: 'all 0.2s ease',
                marginTop: '0.5rem',
              }}
              onMouseEnter={(e) => {
                if (!isPending) {
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.6)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,99,235,0.4)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {isPending ? (
                <>
                  <span
                    style={{
                      width: '1rem',
                      height: '1rem',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.7s linear infinite',
                    }}
                  />
                  Connexion en cours...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Accéder au panneau admin
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-slate-600">
            © 2025 DOCUNET — Accès administrateur réservé
          </p>
        </div>

        {/* Hint badge */}
        <div className="mt-4 flex justify-center">
          <div
            className="flex items-center gap-2 text-xs text-slate-500 px-4 py-2 rounded-full"
            style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(51,65,85,0.5)' }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Connexion sécurisée via Supabase Auth
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
