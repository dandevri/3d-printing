require('dotenv').config()
const {
    META_TITLE,
    META_URL,
    META_DESC,
    META_LANG,
    META_COLOR,
    META_EMAIL,
    META_TELEPHONE
} = process.env

module.exports = {
    title: META_TITLE || '3D Printing',
    url: META_URL || '',
    description: META_DESC || 'Documenting my 3D printing journey',
    lang: META_LANG || 'en',
    primaryColor: META_COLOR || '#000',
    email: META_EMAIL || undefined,
    telephone: META_TELEPHONE || undefined,
    dateFormat: 'dd LLLL yyyy'
}
