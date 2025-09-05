export const Contador = () => {
    let contador = 0;
    const handleClick = () => {
        contador = contador + 1;
    };
    return (
        <div>
            <h3>{contador}</h3>
            <button onClick={handleClick}></button>
        </div>
    );
}