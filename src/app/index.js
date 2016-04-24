import $ from 'jquery'
// import indexTpl from './tpl.html'
import './style.less'

export default class Page{
	constructor() {
		this.initialize()
	}

	initialize() {
		$("body").html(`
		  <h1 class="title">Iotday -- A future-oriented plan for iot</h1>
		  <div class="item-wrap"></div>
		`)
		this.renderItem()
	}

	renderItem() {
		$.ajax({
			url: 'https://api.github.com/repos/iotday/explore-iot',
				dataType:'jsonp',  
        jsonp:'callback'
		})
		.done((data) => {
			this.renderCard(data.data)		
		})
		.fail((err) => {
			console.log(err)
		}) 
	}

	renderCard(info){
		let ct = info.created_at.split('T')[0]

		let html = `
			<div class="item-header">${info.name}</div>
			<div class="item-body">
				<div class="desc">${info.description}</div>
				<div class="other">
					<span class="github-btn">
						<a class="gh-btn" href="${info.html_url}" target="_blank" aria-label="Star on GitHub">
							<span class="gh-ico" aria-hidden="true"></span>
							<span class="gh-text" id="gh-text">Star</span>
						</a> 
						<a style="display: block;" class="gh-count" id="gh-count" href="${info.html_url}/stargazers" target="_blank" aria-label="${info.stargazers_count} stargazers on GitHub">${info.stargazers_count}</a>
					</span>
					<span class="create-time"><span class="icon"></span>${ct}</span>
				</div>
			</div>
		`
		$('.item-wrap').append(html)
	}

}