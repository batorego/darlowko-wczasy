const galleryImages = {
    rooms: [
        { thumb: 'images/thumbnails/thumb_42373073334_d6a980ac3a_b.jpg', full: 'images/originals/42373073334_d6a980ac3a_b.jpg', description: 'Dom' },
        { thumb: 'images/thumbnails/thumb_29219314568_578ed703e7_b.jpg', full: 'images/originals/29219314568_578ed703e7_b.jpg', description: 'Dom' },
        { thumb: 'images/thumbnails/thumb_42373074784_1f42bc6396_b.jpg', full: 'images/originals/42373074784_1f42bc6396_b.jpg', description: 'Dom' },
        { thumb: 'images/thumbnails/thumb_46139244225_864f189670_o.jpg', full: 'images/originals/46139244225_864f189670_o.jpg', description: 'Wejście do pokoju nr 1' },
        { thumb: 'images/thumbnails/thumb_43093422151_eafef43d97_b.jpg', full: 'images/originals/43093422151_eafef43d97_b.jpg', description: 'Pokój nr 1' },
        { thumb: 'images/thumbnails/thumb_43093422811_8876132b4c_b.jpg', full: 'images/originals/43093422811_8876132b4c_b.jpg', description: 'Pokój nr 1' },
        { thumb: 'images/thumbnails/thumb_8845952060_e462246c90_o.jpg', full: 'images/originals/8845952060_e462246c90_o.jpg', description: 'Pokój nr 3' },
        { thumb: 'images/thumbnails/thumb_pok_3.jpg', full: 'images/originals/pok_3.jpg', description: 'Wejście do pokoju nr 3' },
        { thumb: 'images/thumbnails/thumb_42188335295_a3bd57ed9c_b.jpg', full: 'images/originals/42188335295_a3bd57ed9c_b.jpg', description: 'Pokój nr 4' },
        { thumb: 'images/thumbnails/thumb_42188338255_49708d667f_b.jpg', full: 'images/originals/42188338255_49708d667f_b.jpg', description: 'Pokój nr 6' },
        { thumb: 'images/thumbnails/thumb_42188337465_d808bded2d_b.jpg', full: 'images/originals/42188337465_d808bded2d_b.jpg', description: 'Pokój nr 7' },
        { thumb: 'images/thumbnails/thumb_42188338635_0304140ec1_b.jpg', full: 'images/originals/42188338635_0304140ec1_b.jpg', description: 'Pokój nr 8' },
        { thumb: 'images/thumbnails/thumb_42188335955_181cdcd0a1_b.jpg', full: 'images/originals/42188335955_181cdcd0a1_b.jpg', description: 'Pokój nr 9' },
        { thumb: 'images/thumbnails/thumb_42188336855_8e2870eb3f_b.jpg', full: 'images/originals/42188336855_8e2870eb3f_b.jpg', description: 'Pokój nr 10' },
        { thumb: 'images/thumbnails/thumb_43093424521_3cc24ff5c3_b.jpg', full: 'images/originals/43093424521_3cc24ff5c3_b.jpg', description: 'Pokój nr 10' },
        { thumb: 'images/thumbnails/thumb_41281650380_fd01645f7b_b.jpg', full: 'images/originals/41281650380_fd01645f7b_b.jpg', description: 'Pokój nr 11' },
        { thumb: 'images/thumbnails/thumb_8845951194_e7fbdb35d5_o.jpg', full: 'images/originals/8845951194_e7fbdb35d5_o.jpg', description: 'Aneks kuchenny' },
        { thumb: 'images/thumbnails/thumb_14373467930_663ef97e21.jpg', full: 'images/originals/14373467930_663ef97e21.jpg', description: 'Wejście na piętro' }
    ],
    main: [
        { src: 'foty2012/dom_nowe.jpg', description: 'Dom od frontu' },
        { src: 'https://farm2.staticflickr.com/1770/42373073334_d6a980ac3a_b.jpg', description: 'Dom' },
        { src: 'https://farm2.staticflickr.com/1821/29219314568_578ed703e7_b.jpg', description: 'Dom' },
        { src: 'https://farm1.staticflickr.com/834/42373074784_1f42bc6396_b.jpg', description: 'Dom' },
        { src: 'foty2012/pok_3.jpg', description: 'Wejście do pokoju nr 3' },
        { src: 'http://c1.staticflickr.com/3/2936/14559305162_1912f1b99b_z.jpg', description: 'Kącik grillowy' },
        { src: 'http://farm9.staticflickr.com/8406/8685436973_17e95f41d4_b.jpg', description: 'Port w Darłówku' },
        { src: 'http://farm9.staticflickr.com/8404/8685437575_5cf7e24da0_b.jpg', description: 'Plaża w Darłówku' },
        { src: 'http://farm9.staticflickr.com/8394/8686557818_e4652bb6db_b.jpg', description: 'Zachód morza w Darłówku' },
        { src: 'http://c4.staticflickr.com/4/3946/15556434807_7647b023fa_c.jpg', description: 'Regaty w Darłówku' },
        { src: 'http://c2.staticflickr.com/8/7557/15121653514_d8b672fd3a_b.jpg', description: 'Dolina Charlotty' },
        { src: 'http://farm4.staticflickr.com/3790/12150196776_6c4010fc4e_b.jpg', description: 'Regaty w Darłówku' },
        { src: 'http://farm8.staticflickr.com/7380/12150174516_eb8a913f28_b.jpg', description: 'Muzeum militarne w Melechowie' }
    ]
};

function createGallery(containerId, images, useThumb = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    images.forEach(img => {
        const imgSrc = useThumb ? img.thumb : (img.src || img);
        const fullSrc = useThumb ? img.full : (img.src || img);
        const description = img.description || '';
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const image = document.createElement('img');
        image.src = imgSrc;
        image.alt = description || 'Zdjęcie galerii';
        image.loading = 'lazy';
        
        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'gallery-description';
        descriptionDiv.textContent = description;
        
        galleryItem.appendChild(image);
        galleryItem.appendChild(descriptionDiv);
        container.appendChild(galleryItem);
        
        galleryItem.addEventListener('click', () => openModal(fullSrc, description));
    });
}

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <button class="close-modal">&times;</button>
        <div class="modal-content">
            <img src="" alt="Powiększone zdjęcie">
            <div class="modal-description"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.className === 'close-modal') {
            modal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
    
    return modal;
}

function openModal(imgSrc, description = '') {
    let modal = document.querySelector('.modal');
    if (!modal) {
        modal = createModal();
    }
    
    const modalImg = modal.querySelector('img');
    const modalDesc = modal.querySelector('.modal-description');
    modalImg.src = imgSrc;
    modalDesc.textContent = description;
    modal.classList.add('active');
}

// Initialize galleries
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('roomGallery')) {
        createGallery('roomGallery', galleryImages.rooms, true);
    }
    if (document.getElementById('mainGallery')) {
        createGallery('mainGallery', galleryImages.main);
    }
});