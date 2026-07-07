/**
 * Script de création du compte admin dans Supabase
 * Usage: node scripts/create-admin.mjs
 */

const SUPABASE_URL = 'https://gsnplkthfizayqrmvtaw.supabase.co'
const ADMIN_EMAIL = 'okomba500@gmail.com'
const ADMIN_PASSWORD = '123456' // Minimum 6 caractères requis par Supabase

async function createAdminUser() {
  console.log('🔐 Création du compte admin DOCUNET...')
  console.log(`📧 Email: ${ADMIN_EMAIL}`)
  console.log(`🔗 Supabase: ${SUPABASE_URL}`)

  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'sb_publishable_ycJhSMSkZNq0gB1igIcJQQ_OOfatdLw',
      },
      body: JSON.stringify({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('❌ Erreur:', data)
      
      if (data.msg?.includes('already registered') || data.error === 'user_already_exists') {
        console.log('ℹ️  Cet email est déjà enregistré.')
        console.log('✅ Vous pouvez utiliser ce compte pour vous connecter.')
      } else if (data.msg?.includes('Password should be at least')) {
        console.log('⚠️  Le mot de passe doit contenir au moins 6 caractères.')
        console.log('   Le mot de passe a été ajusté à "123456" dans ce script.')
        console.log('   Vous pouvez le changer manuellement dans Supabase Dashboard.')
      }
      return
    }

    if (data.user) {
      console.log('✅ Compte créé avec succès !')
      console.log(`   ID: ${data.user.id}`)
      console.log(`   Email: ${data.user.email}`)
      console.log('')
      console.log('📌 IMPORTANT: Vérifiez votre email pour confirmer le compte,')
      console.log('   ou désactivez la confirmation email dans Supabase Dashboard:')
      console.log('   Authentication > Email > Confirm email → OFF')
    } else {
      console.log('⚠️  Réponse inattendue:', data)
    }
  } catch (err) {
    console.error('❌ Erreur réseau:', err)
  }
}

createAdminUser()
