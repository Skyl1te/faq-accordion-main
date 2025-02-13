const btns = document.querySelectorAll('.card__quastion-btn')
const changeThemeBtn = document.querySelector('#changeThemeBtn')


btns.forEach(btn => {
	btn.addEventListener('click', () => {
		const quastion = btn.closest('.card__quastion')
		const desc = quastion.querySelector('.card__desc')

		btn.classList.toggle('checked')
		if (btn.classList.contains('checked')) {
			desc.style.display = 'inline'
			quastion.style.paddingBottom = '1rem'
		} else {
			desc.style.display = 'none'
			quastion.style.paddingBottom = '0'
		}
		
	})
})


window.addEventListener('load', () => {
	document.documentElement.setAttribute('data-theme', 'light')
})

changeThemeBtn.addEventListener('click', () => {
	document.documentElement.setAttribute('data-theme', 
		document.documentElement.getAttribute('data-theme') == 'light' ? 'dark' : 'light')
})