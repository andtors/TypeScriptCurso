// 4 - componente com extensão
interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
    return (
        <div>
            <h2>Meu segundo componente!</h2>
            <p>Tem até uma prop: {props.name}</p>
        </div>
    )
}

export default SecondComponent