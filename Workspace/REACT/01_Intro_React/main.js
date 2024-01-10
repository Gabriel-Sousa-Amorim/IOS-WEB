    function formataNome(user) {
    return user.firstName + ' ' + user.lastName;
    }
    const user = {
    firstName: 'Irmão',
    lastName: 'do Jorel'
    };
    const mensagem = (
    <h1>
    Hello, {formataNome(user)}!
    </h1>
    );
