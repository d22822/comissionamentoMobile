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
import { useParams } from 'react-router-dom';

export default function Formulario() {
    const {tag} = useParams() 
    const [verificacao1, setVerificacao1] = useState('');
    const [verificacao2, setVerificacao2] = useState('');
    const [verificacao3, setVerificacao3] = useState('');
    const [verificacao4, setVerificacao4] = useState('');
    const [verificacao5, setVerificacao5] = useState('');
    const [verificacao6, setVerificacao6] = useState('');
    const [verificacao7, setVerificacao7] = useState('');
    const [verificacao8, setVerificacao8] = useState('');
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
        const protocoloElement = document.getElementById(`Protocolo-${tag}`);
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
                pdf.save(`Protocolo-${tag}.pdf`);
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
                        Label="Preservação geral do equipamento (pintura, limpeza e ausência de danos)?"
                        valor={verificacao1}
                        aoAlterado={(valor) => setVerificacao1(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Os Protocolos de Completação Mecânica dos cabos de rede, fibra óptica e cabos de sinal estão aprovados e sem pendências impeditivas?"
                        valor={verificacao2}
                        aoAlterado={(valor) => setVerificacao2(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="A documentação referente às comunicações do equipamento está disponível?"
                        valor={verificacao3}
                        aoAlterado={(valor) => setVerificacao3(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="O equipamento se comunica corretamente com seus componentes externos (campo) ao equipamento?"
                        valor={verificacao4}
                        aoAlterado={(valor) => setVerificacao4(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Os cabos de comunicação estão corretamente conectados no equipamento e de acordo com o seu respectivo diagrama de interligação?"
                        valor={verificacao5}
                        aoAlterado={(valor) => setVerificacao5(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="A comunicação prevista pelo projeto para existir entre seus componentes internos está funcionando corretamente?"
                        valor={verificacao6}
                        aoAlterado={(valor) => setVerificacao6(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Foram corretamente configurados os parâmetros e protocolos de comunicação para sincronização do relógio do equipamento com o GPS da Planta Industrial?"
                        valor={verificacao7}
                        aoAlterado={(valor) => setVerificacao7(valor)}
                        Obrigatorio={true}
                    />
                    <DropDown
                        options={Verificacao}
                        Label="Foram criadas e aplicadas as politicas de segurança e acesso físico e remoto para o equipamento?"
                        valor={verificacao8}
                        aoAlterado={(valor) => setVerificacao8(valor)}
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
            <div id={`Protocolo-${tag}`} style={{display: "none"}}>
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
                    tag={tag}
                    accept={accept}
                    notAccept={notAccept}
                />
            </div>

            <Footer />
        </div>
    );
}
