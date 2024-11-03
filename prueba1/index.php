<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comentarios</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Su opinión es importante</h2>
        <form id="commentForm">
            <label for="name">Su nombre</label>
            <input type="text" id="name" name="name" required>
            <label for="comment">Comentario</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div id="comments">
            <div id="commentCounter" class="comment-counter">0 comentarios</div>
            <h3>Comentarios recibidos</h3>
            <div id="commentList"></div>   
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
