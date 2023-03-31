class ProjectCard extends HTMLElement {

    /**
     * 
     * @param {* string} id 
     * @param {* string} title 
     * @param {* primary || secundary} type 
     * @param {* project URL string} link 
     * @param {* image url} imgUrl 
     * @param {* string } description 
     */
	constructor (id, title, type, link, imgUrl, description, sectionId) {
		super();
        this.sectionId = sectionId;
        this.innerHTML =
		`<div class="project ${type} flip-in ${type==='secundary' ? 'invisible' : "" }">
    
            <a href=${link} target='blank'>
                <div id=${id} class="projectImg">
                    <img src=${imgUrl} alt=${id} >
                </div>
            </a> 

            <div class="description">
                <h6 class="projectTitle"> ${title} </h6>
                <p class="descriptionText">${description}</p>
            </div>

        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('greeting-message', ProjectCard);
};
