const rows = [
    {
        name: 'Reynaldo',
        img: 'https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png',
        premium: false,
        status: true,
    },
    {
        name: 'Larz',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNJIRJWEzvMuUUMwkqYzQjdVlM1M5pLc-YZEDkOIvmtIoh_vr5&usqp=CAU',
        premium: true,
        status: true,
    },
    {
        name: 'Gatomon',
        img: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        premium: false,
        status: false,
    },
    {
        name: 'Lindo',
        img: 'https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
        premium: true,
        status: true,
    },
]

const table_d = document.querySelector('#table');
console.log(table_d)
rows.forEach(row => {
    const td = document.createElement('tr');
    td.innerHTML = `
        <td class="profile"><img
        src="${row.img}"
        alt="">${row.name}</td>
        <td>Septembre</td>
        <td class="type">
            <span span class="${row.premium ? 'premium' : 'nopremium'}">Premium</span></td>
        <td class="${!row.status ? 'closed' : ''}">${row.status ? 'Open' : 'Closed'}</td>
        <td><label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
            </label>
        </td>
    `;
    table_d.appendChild(td);
});

const tag_a = document.querySelectorAll('.dashboard a');
tag_a.forEach(tag => {



    tag.addEventListener('click', () => {
        const dashboard = document.querySelector('.dashboard a.active').classList.remove('active');
        tag.classList.add('active');
    })
})