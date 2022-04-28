const fixUrl = (url) => url.replace(/^http:\/\//i, 'https://')

const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1)

export const metalGearMunger = (character) => ({
    id: character.id,
    name: capitalizeWord(character.name),
    siteUrl: fixUrl(character.site_detail_url),
    apiUrl: fixUrl(character.api_detail_url)
})
// character>
// <api_detail_url>
// <![CDATA[ https://www.giantbomb.com/api/character/3005-945/ ]]>
// </api_detail_url>
// <id>945</id>
// <name>
// <![CDATA[ Vamp ]]>
// </name>
// <site_detail_url>
// <![CDATA[ https://www.giantbomb.com/vamp/3005-945/ ]]>
// </site_detail_url>
// </character