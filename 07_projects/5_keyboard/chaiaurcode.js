// console.log('project 5')

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
    <table>
        <tr>
            <th>Key</th>
            <th>Code</th>
            <th>KeyCode</th>
        </tr>    
        <tr>
            <td>${e.key === " "? 'Space' : e.key}</td>
            <td>${e.code}</td>
            <td>${e.keyCode}</td>
        </tr>    
    </table>
    </div>
    `;
})