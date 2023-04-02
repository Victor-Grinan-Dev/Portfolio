class CertificateCard extends HTMLElement {

    /**
     * 
     * @param {* string} id 
     * @param {* string} title 
     * @param {* primary || secundary} type 
     * @param {* project URL string} link 
     * @param {* image url} imgUrl 
     * @param {* string } description 
     */
	constructor (id, title, link) {
		super();
        this.innerHTML =
		`<div id=${id} class="certificate">
            <div>    
                <a class="certView" href=${link} target="_blank">
                    <span class="material-symbols-outlined">visibility</span>
                    <span> ${title} </span>
                </a>
            </div>
            <iframe src=${link} frameborder="0" />  
        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('certificate-cards', CertificateCard);
};
