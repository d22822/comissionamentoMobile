import styles from "./styles.module.scss"
interface ProtocoloProps {
    EmpresaExecutor: string;
    ResponsavelExecutor: string;
    DataExecutor: string;
    EmpresaVerificador: string;
    ResponsavelVerificador: string;
    DataVerificador: string;
    EmpresaAprovador: string;
    ResponsavelAprovador: string;
    DataAprovador: string;
    Dado1: string;
    Dado2: string;
    Dado3: string;
    Dado4: string;
    Dado5: string;
    Dado6: string;
    Dado7: string;
    Dado8: string;
    Dado9: string;
    Dado10: string;
    Dado11: string;
    Dado12: string;
    Dado13: string;
    Dado14: string;
    Dado15: string;
    Dado16: string;
    Dado17: string;
    tag: string | undefined;    
    accept: number;
    notAccept: number;
}

export default function Protocolo({EmpresaExecutor, ResponsavelExecutor, DataExecutor, EmpresaVerificador ,ResponsavelVerificador, DataVerificador, EmpresaAprovador, ResponsavelAprovador, DataAprovador,Dado1, Dado2, Dado3, Dado4, Dado5, Dado6, Dado7, Dado8, Dado9,Dado10, Dado11, Dado12, Dado13, Dado14, Dado15, Dado16, Dado17, accept, notAccept} : ProtocoloProps) {
    return(
        <div className={styles.container}>
            <div>
                <table className={styles.header}>
                    <tr>
                        <td><strong>Projeto</strong><br />Projeto 6 MTPA - MIN. CORUMBAENSE</td>
                        <td><strong>Atividade</strong><br />PROTOCOLO DE COMISSIONAMENTO COM CARGA</td>
                    </tr>
                    <tr>
                        <td><strong>TAG</strong><br />VMZ-00001</td>
                        <td><strong>Descrição</strong><br />AM02 - Motor Principal</td>
                    </tr>
                </table>

                <div className={styles.dadosGerais}>
                    <label><strong>DADOS GERAIS</strong></label>
                    <table>
                        <thead>
                            <tr>
                                <td><strong>Sistema/Sub: </strong>SA-04-02</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><strong>Disc/Fam: </strong>ELÉTRICA/MOT-MOTOR ELÉTRICO</td>
                            </tr>
                            <tr>
                                <td><strong>Subitens: </strong>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.tabelaVerificacoes}>
                    <label><strong>DADOS DA ATIVIDADE - PROTOCOLO DE COMISSIONAMENTO COM CARGA</strong></label>
                    <table>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>VERIFICAÇÕES</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={3} style={{textAlign: 'left'}}>VERIFICAÇÕES GERAIS</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Identificação do equipamento (TAG) conforme projeto?</td>
                                        <td>{Dado1}</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Aterramento dos componentes conforme projeto?</td>
                                        <td>{Dado2}</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>Preservação geral (limpeza e ausência de danos)?</td>
                                        <td>{Dado3}</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>Instalação de sinalizações de segurança e proteção conforme o projeto?</td>
                                        <td>{Dado4}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3} style={{textAlign: 'left'}}>DESCRIÇÃO</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>O eixo do motor elétrico está acoplado ao equipamento?</td>
                                        <td>{Dado5}</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>Acionamento do motor elétrico operando conforme projeto?</td>
                                        <td>{Dado6}</td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>Os diagramas elétricos e diagramas de interligação do equipamento estão disponíveis?</td>
                                        <td>{Dado7}</td>
                                    </tr>
                                    <tr>
                                        <td>8.</td>
                                        <td>Realização do teste de partida e parada local (botoeira)?</td>
                                        <td>{Dado8}</td>
                                    </tr>
                                    <tr>
                                        <td>9.</td>
                                        <td>Realização do teste de partida e parada remoto (sala de controle)?</td>
                                        <td>{Dado9}</td>
                                    </tr>
                                    <tr>
                                        <td>10.</td>
                                        <td>Realização do teste de partida e parada remoto (subestação)?</td>
                                        <td>{Dado10}</td>
                                    </tr>
                                    <tr>
                                        <td>11.</td>
                                        <td>Realização do teste de parada de emergência?</td>
                                        <td>{Dado11}</td>
                                    </tr>
                                    <tr>
                                        <td>12.</td>
                                        <td>Verificação / ajuste da parametrização dos dispositivos de proteção e acionamento?</td>
                                        <td>{Dado12}</td>
                                    </tr>
                                    <tr>
                                        <td>13.</td>
                                        <td>Verificação da corrente / tempo de partida e corrente de regime contínuo?</td>
                                        <td>{Dado13}</td>
                                    </tr>
                                    <tr>
                                        <td>14.</td>
                                        <td>Verificação da temperatura dos mancais, carcaça e enrolamentos?</td>
                                        <td>{Dado14}</td>
                                    </tr>
                                    <tr>
                                        <td>15.</td>
                                        <td>Verificação do deslocamento axial do eixo (centro magnético)?</td>
                                        <td>{Dado15}</td>
                                    </tr>
                                    <tr>
                                        <td>16.</td>
                                        <td>Verificação de vibração e ruídos dentro da normalidade?</td>
                                        <td>{Dado16}</td>
                                    </tr>
                                    <tr>
                                        <td>17.</td>
                                        <td>Verificado e testado junto ao supervisório a indicação dos sensores de temperatura?</td>
                                        <td>{Dado17}</td>
                                    </tr>
                            </tbody>
                    </table>
                </div>
                <div className={styles.checkboxResult}>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan={2}>ACEITAÇÃO DO RESULTADO DA INSPEÇÃO DE COMPLETAÇÃO MECÂNICA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>
                                        Resultado aceito
                                        <input type="checkbox" checked={accept === 1} value={accept}/>
                                    </label>
                                </td>
                                <td>
                                    <label>
                                        Resultado não aceito
                                        <input type="checkbox" checked={notAccept === 1} value={notAccept}/>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.aprove}>
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Empresa</th>
                                <th>Responsável</th>
                                <th>Data</th>
                                <th>Assinatura</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Executor</td>
                                <td>{EmpresaExecutor}</td>
                                <td>{ResponsavelExecutor}</td>
                                <td>{DataExecutor}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Verificador</td>
                                <td>{EmpresaVerificador}</td>
                                <td>{ResponsavelVerificador}</td>
                                <td>{DataVerificador}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Aprovador</td>
                                <td>{EmpresaAprovador}</td>
                                <td>{ResponsavelAprovador}</td>
                                <td>{DataAprovador}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}