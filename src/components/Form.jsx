import Button from "./Button";
import Input from "./Input";

function Form(){

    return (
        <form action="">
            <Input text="Nombre" placeholder="Ejemplo Martin"/>
            <Input text="Email" placeholder="example@email.com"/>            
            <Button />
        </form>
    )
}
export default Form;