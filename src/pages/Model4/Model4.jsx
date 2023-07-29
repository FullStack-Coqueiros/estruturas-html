import './styles.css'

function Model4() {
    return (
        <div className="d-flex login">
            <div className='image-area'>
                <img src='https://nordvpn.com/wp-content/uploads/blog-social-nordvpn-login-and-sign-up-process-explained-1200x628-2.png' />
            </div>
            <div className='form-area'>
                <div className='without-account'>
                    <span>Não possui uma conta?</span>
                    <button className='ms-3 btn btn btn-outline-primary'>Criar Conta</button>
                </div>

                <h3 className='mb-3'>Login</h3>
                
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="*******" />
                    </div>
                    <button className='btn btn btn-primary'>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default Model4;