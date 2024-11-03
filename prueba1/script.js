document.getElementById('commentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    
    try {
        const response = await fetch('save_comment.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, comment })
        });
        const result = await response.json();
        if (result.status === 'success') {
            loadComments();
            document.getElementById('commentForm').reset();
        } else {
            console.error(result.message);
        }
    } catch (error) {
        console.error('Error al enviar el comentario:', error);
    }
});

async function loadComments() {
    try {
        const response = await fetch('get_comments.php');
        const comments = await response.json();

        // Verifica si comments es un array
        if (!Array.isArray(comments)) {
            console.error('La respuesta no es un array:', comments);
            return;
        }

        // Actualiza el contador de comentarios
        const commentCounter = document.getElementById('commentCounter');
        commentCounter.textContent = `${comments.length} comentarios`;

        const commentList = document.getElementById('commentList');
        commentList.innerHTML = '';

        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('comment-name');
            nameDiv.textContent = comment.name;
            
            const commentTextDiv = document.createElement('div');
            commentTextDiv.textContent = comment.comment;

            commentDiv.appendChild(nameDiv);
            commentDiv.appendChild(commentTextDiv);
            commentList.appendChild(commentDiv);
        });
    } catch (error) {
        console.error('Error al cargar comentarios:', error);
    }
}


window.onload = loadComments;
