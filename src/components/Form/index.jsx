import module from './style.module.scss'

function Form() {
    return ( 
        <form>
            <div className={module["form-header"]}>
                <h1>Получите консультацию</h1>
                <h3>Оставьте свои контактные данные и мы вам перезвоним!</h3>
            </div>

            <div className={module["form-container"]}>
                <input type="text" placeholder='Ваше имя'/>
                <input type="text" placeholder='+7 (___) ___-__-__'/>
                <button>Отправить</button>
            </div>
        </form>
     );
}

export default Form;