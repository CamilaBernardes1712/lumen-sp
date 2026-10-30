document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const comment = document.getElementById('user-comment').value;
    
    if(name && comment) {
        const commentsList = document.getElementById('comments-list');
        
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        newComment.innerHTML = `<strong>${name} (Estudante):</strong><p>${comment}</p>`;
        
        commentsList.prepend(newComment);
        
        document.getElementById('user-name').value = '';
        document.getElementById('user-comment').value = '';
        alert('Comentário publicado com sucesso no fórum do Lumen SP!');
    }
});
