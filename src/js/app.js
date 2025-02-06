const btns = document.querySelectorAll('.card__quastion-btn')

btns.forEach(btn => {
	btn.addEventListener('click', () => {
		const quastion = btn.closest('.card__quastion')
		const desc = quastion.querySelector('.card__desc')

		if (btn.classList.contains('unchecked')) {
			btn.classList.remove('unchecked')
			btn.classList.add('checked')
			desc.style.display = 'none'
			quastion.style.paddingBottom = '0'


		} else {
			btn.classList.remove('checked')
			btn.classList.add('unchecked')
			desc.style.display = 'inline'
			quastion.style.paddingBottom = '1rem'
		}
		
	})
})