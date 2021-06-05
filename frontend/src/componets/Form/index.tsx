import { getByLabelText } from "@testing-library/dom";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <form>
            <div className="row g-3">
                <label >Nome:</label>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Name" />
                </div>
            </div>

            <div className="row g-3">
                <label>Idade:</label>
                <div className="col">
                    <input type="number" className="form-control" placeholder=" Idade" aria-label="Idade" />
                </div>
            </div>
            <div className="row g-3">
                <label className="autoSizingSelect">Gênero:</label>
                <div className="col">
                    <select className="form-select" id="autoSizingSelect">
                        <option selected>Escolher...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
            </div>

            <div className="row g-3">
                <label>Telefone:</label>
                <div className="col">
                    <input type="number" className="form-control" placeholder=" Telefone" aria-label="Telefone" />
                </div>
            </div>

            <div className="row g-3">
                <label className="exampleFormControlInput1" > Endereço de email:</label>
                <div className = "col">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
            </div>

                <div className="row g-3">
                    <label >Endereço:</label>

                    <div className="col-sm-7">
                        <input type="text" className="form-control" placeholder="Cidade" aria-label="City" />
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control" placeholder="
                        Estado" aria-label="State" />
                    </div>
                    <div className="col-sm">
                        <input type="text" className="form-control" placeholder="CEP" aria-label="Zip" />
                    </div>
                </div>


                <div className="row g-3">
                    <label>Formação:</label>
                    <div className="col">
                        <input type="text" className="form-control" placeholder=" Ex. Computação" aria-label="Ex. Computação" />
                    </div>
                </div>


                <div className="row g-3">
                    <label> Qualificação:</label>
                    <div className="col">
                        <input type="text" className="form-control" placeholder=" Qualificação" aria-label="" />
                    </div>
                </div>

                <div className="row g-3">

                    <label className="">Experiência:</label>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Deixe um comentário aqui" aria-label="floatingTextarea2" ></textarea>
                        <label>Comentários</label>
                    </div>
                </div>

                <div className="row g-3">
                    <label className="autoSizingSelect">Situação Laboral:</label>
                    <div className="col">
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Escolher...</option>
                            <option value="Masculino">Empregado</option>
                            <option value="Feminino">Desempregado</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" >
                            Aceite os termos e condições
      </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
      </div>

                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary " type="submit">Enviar Formulario</button>
                </div>



        </form>

    );
}

export default Form;
