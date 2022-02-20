const linksSocialMedia = {
  github: 'ZehMarcelo',
  youtube: 'UCtp7ewHy4yhemUW_vuklIUQ',
  facebook: '100073982604553',
  instagram: 'zeh_marcelo',
  twitter: 'Zeh_Marcelo_'
}

function ChangeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}/`
  }
}

function GetGitHubProfileInfos() {
  const githubUrl = `http://api.github.com/users/${linksSocialMedia.github}`
  fetch(githubUrl)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent=data.bio
      userLink.href = data.html_url
      foto.src = data.avatar_url
      githubLogin.textContent = data.login

    })
}
GetGitHubProfileInfos()
ChangeSocialMediaLinks()
