/**
 * Script pour confirmer l'email admin et définir le rôle admin
 * Nécessite la SUPABASE_SERVICE_ROLE_KEY
 * 
 * Comment trouver la Service Role Key:
 * 1. Allez sur https://supabase.com/dashboard
 * 2. Votre projet > Settings > API
 * 3. Copiez "service_role" (secret key)
 * 
 * Usage: $env:SUPABASE_SERVICE_KEY="votre_clé"; node scripts/confirm-admin.mjs
 */

const SUPABASE_URL = 'https://gsnplkthfizayqrmvtaw.supabase.co'
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY
const USER_ID = '4dda6c1e-7168-4cd1-bfa1-0ae83038e03b' // ID créé

if (!SERVICE_KEY) {
  console.log('❌ Variable SUPABASE_SERVICE_KEY manquante.')
  console.log('')
  console.log('👉 Alternative rapide: désactivez la confirmation email dans Supabase:')
  console.log('   1. https://supabase.com/dashboard → votre projet')
  console.log('   2. Authentication > Providers > Email')
  console.log('   3. Désactivez "Confirm email"')
  console.log('   4. Puis reconnectez-vous avec okomba500@gmail.com / 123456')
  process.exit(0)
}

async function confirmAdmin() {
  console.log('🔓 Confirmation du compte admin...')

  const response = await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${USER_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
    },
    body: JSON.stringify({
      email_confirm: true,
      user_metadata: { role: 'admin' },
    }),
  })

  const data = await response.json()

  if (response.ok) {
    console.log('✅ Email confirmé ! Le compte admin est prêt.')
    console.log(`   Email: ${data.email}`)
    console.log(`   Confirmé: ${data.email_confirmed_at}`)
  } else {
    console.error('❌ Erreur:', data)
  }
}

confirmAdmin()
