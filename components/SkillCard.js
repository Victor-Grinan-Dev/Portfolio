class SkillCard extends HTMLElement {
    /**
     * 
     * @param {string} id 
     * @param {string} skillName 
     * @param {int} stars 
     * @param {string} imgUrl 
     */
	constructor (id, skillName, stars, imgUrl) {
		super();
        this.innerHTML =
            `<div id=${id} class="skill">
                <img class='techLogo' src="${imgUrl}" alt="icon">
                <div class='skillValues'>
                    <p class='skillTitle'>${skillName}</p>
                    <p class='skillRating'>${'⭐' * stars}</p> 
                    <div class="fill-bar"><div class="level" id="HTML-level"></div></div>
                </div> 
            </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('skill-card', SkillCard);
};