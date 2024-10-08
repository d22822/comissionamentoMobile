import styles from './styles.module.scss';
import logo from '../../assets/svg/LOGO-White.svg';
import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer';
import RegisterInput from '../../components/RegisterInput';
import HeaderInput from '../../components/HeaderInput';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Verificacao } from '../../utils/dropDownOptions';
import DropDown from '../../components/DropDown';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Protocolo from '../Protocolo';

export default function Formulario() {
    const [verificacao1, setVerificacao1] = useState('');
    const [verificacao2, setVerificacao2] = useState('');
    const [verificacao3, setVerificacao3] = useState('');
    const [verificacao4, setVerificacao4] = useState('');
    const [verificacao5, setVerificacao5] = useState('');
    const [verificacao6, setVerificacao6] = useState('');
    const [verificacao7, setVerificacao7] = useState('');
    const [verificacao8, setVerificacao8] = useState('');
    const [verificacao9, setVerificacao9] = useState('');
    const [verificacao10, setVerificacao10] = useState('');
    const [verificacao11, setVerificacao11] = useState('');
    const [verificacao12, setVerificacao12] = useState('');
    const [verificacao13, setVerificacao13] = useState('');
    const [verificacao14, setVerificacao14] = useState('');
    const [verificacao15, setVerificacao15] = useState('');
    const [verificacao16, setVerificacao16] = useState('');
    const [verificacao17, setVerificacao17] = useState('');
    const [empresaExecutor, setEmpresaExecutor] = useState('');
    const [responsavelExecutor, setResponsavelExecutor] = useState('');
    const [dataExecutor, setDataExecutor] = useState('');
    const [empresaVerificador, setEmpresaVerificador] = useState('');
    const [responsavelVerificador, setResponsavelVerificador] = useState('');
    const [dataVerificador, setDataVerificador] = useState('');
    const [empresaAprovador, setEmpresaAprovador] = useState('');
    const [responsavelAprovador, setResponsavelAprovador] = useState('');
    const [dataAprovador, setDataAprovador] = useState('');
    const [accept, setAccept] = useState(1);
    const [notAccept, setNotAccept] = useState(0);

    const handleCheckboxChange = (event: any, setter: any) => {
        setter(event.target.checked ? 1 : 0);
    };

    const handleSavePDF = () => {
        const protocoloElement = document.getElementById('Protocolo-VMZ-0001');
        if (!protocoloElement) {
            console.error('Elemento Protocolo não encontrado.');
            return;
        }
    
        // Mostra temporariamente o elemento antes de capturar
        protocoloElement.style.display = 'block';
    
        html2canvas(protocoloElement, { scale: 2, useCORS: true })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                if (!imgData || imgData === 'data:,') {
                    console.error('Erro ao gerar a imagem do canvas.');
                    return;
                }
    
                const pdfWidth = canvas.width / 2;
                const pdfHeight = canvas.height / 2;
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: [pdfWidth, pdfHeight],
                });
    
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('Protocolo-VMZ-0001');
            })
            .catch((error) => {
                console.error('Erro ao gerar o PDF:', error);
            })
            .finally(() => {
                // Volta a esconder o elemento imediatamente após salvar
                protocoloElement.style.display = 'none';
            });
    };
    
    
    


    const handleScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div className={styles.container}>
            <header>
                <img id={styles.logo} src={logo} alt="Logo" />
            </header>
            <div className={styles.Content}>
                <form action="" className={styles.Form}>
                    <h1>Formulario Do Protocolo</h1>
                    <HeaderInput Titulo='Verificação' />
                    <p>STATUS: C – CONFORME / NC – NÃO CONFORME / NA – NÃO APLICÁVEL</p>
                    <DropDown
                        options={Verificacao}
                        Label="Identificação do equipamento (TAG) conforme projeto?"
                        valor={verificacao1}
                        aoAlterado={(valor) => setVerificacao1(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Aterramento dos componentes conforme projeto?"
                        valor={verificacao2}
                        aoAlterado={(valor) => setVerificacao2(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Preservação geral (limpeza e ausência de danos)?"
                        valor={verificacao3}
                        aoAlterado={(valor) => setVerificacao3(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Instalação de sinalizações de segurança e proteção conforme o projeto?"
                        valor={verificacao4}
                        aoAlterado={(valor) => setVerificacao4(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="O eixo do motor elétrico está acoplado ao equipamento?"
                        valor={verificacao5}
                        aoAlterado={(valor) => setVerificacao5(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Acionamento do motor elétrico operando conforme projeto?"
                        valor={verificacao6}
                        aoAlterado={(valor) => setVerificacao6(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Os diagramas elétricos e diagramas de interligação do equipamento estão disponíveis?"
                        valor={verificacao7}
                        aoAlterado={(valor) => setVerificacao7(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Realização do teste de partida e parada local (botoeira)?"
                        valor={verificacao8}
                        aoAlterado={(valor) => setVerificacao8(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Realização do teste de partida e parada remoto (sala de controle)?"
                        valor={verificacao9}
                        aoAlterado={(valor) => setVerificacao9(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Realização do teste de partida e parada remoto (subestação)?"
                        valor={verificacao10}
                        aoAlterado={(valor) => setVerificacao10(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Realização do teste de parada de emergência?"
                        valor={verificacao11}
                        aoAlterado={(valor) => setVerificacao11(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificação / ajuste da parametrização dos dispositivos de proteção e acionamento?"
                        valor={verificacao12}
                        aoAlterado={(valor) => setVerificacao12(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificação da corrente / tempo de partida e corrente de regime contínuo?"
                        valor={verificacao13}
                        aoAlterado={(valor) => setVerificacao13(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificação da temperatura dos mancais, carcaça e enrolamentos?"
                        valor={verificacao14}
                        aoAlterado={(valor) => setVerificacao14(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificação do deslocamento axial do eixo (centro magnético)?"
                        valor={verificacao15}
                        aoAlterado={(valor) => setVerificacao15(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificação de vibração e ruídos dentro da normalidade?"
                        valor={verificacao16}
                        aoAlterado={(valor) => setVerificacao16(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Verificado e testado junto ao supervisório a indicação dos sensores de temperatura?"
                        valor={verificacao17}
                        aoAlterado={(valor) => setVerificacao17(valor)}
                        Obrigatorio={true}
                    />
                    <HeaderInput Titulo='Validações' />
                    <h3>Executor</h3>
                    <RegisterInput
                        PH="Empresa"
                        Label="Empresa"
                        type="text"
                        valor={empresaExecutor}
                        aoAlterado={(valor) => setEmpresaExecutor(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH="Responsavel"
                        Label="Responsavel"
                        type="text"
                        valor={responsavelExecutor}
                        aoAlterado={(valor) => setResponsavelExecutor(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH=""
                        Label="Data"
                        type="date"
                        valor={dataExecutor}
                        aoAlterado={(valor) => setDataExecutor(valor)}
                        Obrigatorio={true}
                    />
                    <h3>Verificador</h3>
                    <RegisterInput
                        PH="Empresa"
                        Label="Empresa"
                        type="text"
                        valor={empresaVerificador}
                        aoAlterado={(valor) => setEmpresaVerificador(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH="Responsavel"
                        Label="Responsavel"
                        type="text"
                        valor={responsavelVerificador}
                        aoAlterado={(valor) => setResponsavelVerificador(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH="Nome"
                        Label="Data"
                        type="date"
                        valor={dataVerificador}
                        aoAlterado={(valor) => setDataVerificador(valor)}
                        Obrigatorio={true}
                    />
                    <h3>Aprovador</h3>
                    <RegisterInput
                        PH="Empresa"
                        Label="Empresa"
                        type="text"
                        valor={empresaAprovador}
                        aoAlterado={(valor) => setEmpresaAprovador(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH="Responsavel"
                        Label="Responsavel"
                        type="text"
                        valor={responsavelAprovador}
                        aoAlterado={(valor) => setResponsavelAprovador(valor)}
                        Obrigatorio={true}
                    />
                    <RegisterInput
                        PH="Nome"
                        Label="Data"
                        type="date"
                        valor={dataAprovador}
                        aoAlterado={(valor) => setDataAprovador(valor)}
                        Obrigatorio={true}
                    />
                    <HeaderInput Titulo='Aceitação' />
                    <FormGroup className={styles.Checkboxs}>
                        <FormControlLabel checked={accept === 1} onClick={() => { if (accept === 1) { setNotAccept(1); } if (accept === 0) { setNotAccept(0); } }} onChange={(evento: any) => (handleCheckboxChange(evento, setAccept))} control={<Checkbox />} value={accept} label="Resultado Aceito" />
                        <FormControlLabel checked={notAccept === 1} onClick={() => { if (notAccept === 1) { setAccept(1); } if (notAccept === 0) { setAccept(0); } }} onChange={(evento: any) => (handleCheckboxChange(evento, setNotAccept))} control={<Checkbox />} value={notAccept} label="Resultado não Aceito" />
                    </FormGroup>
                    <button type="button" onClick={handleSavePDF}>Salvar</button>
                </form>
            </div>
            <div id={'Protocolo-VMZ-0001'} style={{display: "none"}}>
                <Protocolo
                    EmpresaExecutor={empresaExecutor}
                    ResponsavelExecutor={responsavelExecutor}
                    DataExecutor={dataExecutor}
                    EmpresaVerificador={empresaVerificador}
                    ResponsavelVerificador={responsavelVerificador}
                    DataVerificador={dataVerificador}
                    EmpresaAprovador={empresaAprovador}
                    ResponsavelAprovador={responsavelAprovador}
                    DataAprovador={dataAprovador}
                    Dado1={verificacao1}
                    Dado2={verificacao2}
                    Dado3={verificacao3}
                    Dado4={verificacao4}
                    Dado5={verificacao5}
                    Dado6={verificacao6}
                    Dado7={verificacao7}
                    Dado8={verificacao8}
                    Dado9={verificacao9}
                    Dado10={verificacao10}
                    Dado11={verificacao11}
                    Dado12={verificacao12}
                    Dado13={verificacao13}
                    Dado14={verificacao14}
                    Dado15={verificacao15}
                    Dado16={verificacao16}
                    Dado17={verificacao17}
                    tag="VMZ-00001"
                    accept={accept}
                    notAccept={notAccept}
                />
            </div>

            <Footer />
        </div>
    );
}
