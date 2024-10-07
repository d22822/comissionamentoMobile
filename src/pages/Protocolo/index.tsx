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
    tag: string | undefined;    
    accept: number;
    notAccept: number;
}

export default function Protocolo({EmpresaExecutor, ResponsavelExecutor, DataExecutor, EmpresaVerificador ,ResponsavelVerificador, DataVerificador, EmpresaAprovador, ResponsavelAprovador, DataAprovador,Dado1, Dado2, Dado3, Dado4, Dado5, Dado6, Dado7, Dado8, tag, accept, notAccept} : ProtocoloProps) {
    return(
        <div className={styles.container}>
            <div>
                <table className={styles.header}>
                    <tr>
                        <td><strong>Projeto</strong><br />Projeto ferro carajás</td>
                        <td><strong>Atividade</strong><br /> Inspeção De Pré-Comissionamento</td>
                    </tr>
                    <tr>
                        <td><strong>TAG</strong><br />{tag}</td>
                        <td><strong>Descrição</strong><br /> Nota1</td>
                    </tr>
                </table>

                <div className={styles.dadosGerais}>
                    <label><strong>DADOS GERAIS</strong></label>
                    <table>
                        <thead>
                            <tr>
                                <td><strong>Sistema/Sub: </strong>Nota 1</td>
                                <td><strong>Skid: </strong>Nota 2</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={2}><strong>Disc/Fam: </strong>AUTOMAÇÃO/EQA - EQUIPAMENTO DE AUTOMAÇÃO</td>
                            </tr>
                            <tr>
                                <td><strong>Modelo: </strong>Nota 2</td>
                                <td><strong>Fabr: </strong>Nota 2</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>N° de Série: </strong>Nota 2</td>
                            </tr>
                            <tr>
                                <td><strong>RM: </strong>Nota 2</td>
                                <td><strong>Local: </strong>Nota 2</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Desenho: </strong>Nota 1</td>
                            </tr>
                            <tr>
                                <td><strong>Folha de Dados: </strong>Nota 1</td>
                                <td><strong>Área: </strong>Nota 2</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><strong>Itens do agrupamento: </strong>Nota 1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.tabelaVerificacoes}>
                    <label><strong>DADOS DA ATIVIDADE - INSPEÇÃO DE PRÉ-COMISSIONAMENTO – AUTOMAÇÃO</strong></label>
                    <table>
                        <thead>
                            <tr>
                                <th>ITEM</th>
                                <th>VERIFICAÇÕES - EQA</th>
                                <th>STATUS</th>
                            </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Preservação geral do equipamento (pintura, limpeza e ausência de danos)?</td>
                                        <td>{Dado1}</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td>Os Protocolos de Completação Mecânica dos cabos de rede, fibra óptica e cabos de sinal estão aprovados e sem pendências impeditivas?</td>
                                        <td>{Dado2}</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td>A documentação referente às comunicações do equipamento está disponível?</td>
                                        <td>{Dado3}</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td>O equipamento se comunica corretamente com seus componentes externos (campo) ao equipamento?</td>
                                        <td>{Dado4}</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td>Os cabos de comunicação estão corretamente conectados no equipamento e de acordo com o seu respectivo diagrama de interligação?</td>
                                        <td>{Dado5}</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td>A comunicação prevista pelo projeto para existir entre seus componentes internos está funcionando corretamente?</td>
                                        <td>{Dado6}</td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td>Foram corretamente configurados os parâmetros e protocolos de comunicação para sincronização do relógio do equipamento com o GPS da Planta Industrial?</td>
                                        <td>{Dado7}</td>
                                    </tr>
                                    <tr>
                                        <td>8.</td>
                                        <td>Foram criadas e aplicadas as políticas de segurança e acesso físico e remoto para o equipamento?</td>
                                        <td>{Dado8}</td>
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