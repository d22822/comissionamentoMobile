import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import styles from './styles.module.scss';
import { Footer } from '../../components/Footer';
import logo from '../../assets/svg/LOGO-White.svg'

export default function LeitorQrCode() {
    // Referência para o elemento DOM que hospedará o scanner
    const readerRef = useRef<HTMLDivElement>(null);

    //Função Para Direcionamento da pagina
    function handleRedirect(tag: String) {
        window.location.href = `/ComissionamentoMobile/${tag}`
    }

    
    // Referência para a instância do Html5Qrcode
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
    
    // Estado para armazenar o resultado da leitura do QR code
    const [result, setResult] = useState<string>("");
    
    // Referência para rastrear se o scanner foi iniciado com sucesso
    const isStartedRef = useRef<boolean>(false);
    
    // Referência para rastrear se o processo de parada está em andamento
    const isStoppingRef = useRef<boolean>(false);

    useEffect(() => {
        // Verifica se a referência do leitor está disponível
        if (!readerRef.current) {
            console.error("Div 'reader' não encontrado.");
            return;
        }

        // Inicializa o Html5Qrcode com o elemento DOM
        const html5QrCode = new Html5Qrcode(readerRef.current!.id);
        html5QrCodeRef.current = html5QrCode;

        // Função de callback para sucesso na leitura
        const successCallback = (decodedText: string, decodedResult: any) => {
            if (isStoppingRef.current) {
                console.log("Processo de parada em andamento. Ignorando callback de sucesso.");
                return;
            }

            console.log(`QR Code decodificado: ${decodedText}`, decodedResult);
            setResult(`Sucesso: ${decodedText}`);
            const resultRefined = decodedText.toLowerCase()
            const possibleResults = ["VMZ-00001"]
            for(let i = 0; i < possibleResults.length; i++){
                if(resultRefined.includes(possibleResults[i].toLowerCase())){
                    handleRedirect(possibleResults[i])
                }
                else{
                    handleRedirect("404")
                }
            }            

            // Inicia o processo de parada do scanner após uma leitura bem-sucedida
            isStoppingRef.current = true;
            html5QrCode.stop().then(() => {
                html5QrCode.clear();
                isStartedRef.current = false;
                console.log("Scanner parado após sucesso na leitura.");
            }).catch(err => {
                console.error("Erro ao parar o scanner após sucesso:", err);
                isStoppingRef.current = false; // Permite tentativas futuras de parada
            });
        };

        // Função de callback para erro na leitura
        const errorCallback = (errorMessage: string) => {
            console.log(`Erro de scan: ${errorMessage}`);
            // Opcional: Atualizar o estado com mensagens de erro ou ignorar
        };

        // Função assíncrona para iniciar o scanner
        const startScanner = async () => {
            try {
                await html5QrCode.start(
                    { facingMode: "environment" }, // Preferência de câmera (traseira)
                    { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 }, // Configurações do scanner
                    successCallback,
                    errorCallback
                );
                isStartedRef.current = true;
                console.log("Scanner iniciado com sucesso.");
            } catch (err) {
                console.error("Erro ao iniciar o scanner:", err);
                setResult("Erro ao iniciar o scanner");
            }
        };

        // Inicia o scanner
        startScanner();

        // Função de limpeza ao desmontar o componente
        return () => {
            // Verifica se o scanner está ativo e não está no processo de parada
            if (html5QrCodeRef.current && isStartedRef.current && !isStoppingRef.current) {
                html5QrCodeRef.current.stop().then(() => {
                    html5QrCodeRef.current?.clear();
                    isStartedRef.current = false;
                    console.log("Scanner parado e limpo durante o unmount.");
                }).catch(err => {
                    console.error("Erro ao parar o scanner durante o unmount:", err);
                });
            } else {
                console.log("Scanner não estava ativo ou já estava sendo parado durante o unmount.");
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <header>
                <img id={styles.logo} src={logo} alt="Logo" />
            </header>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
            {/* Elemento que hospedará o scanner de QR code */}
            <div 
                id="reader" ref={readerRef} 
                style={{ 
                    width: "300px", 
                    height: "300px", 
                    border: "2px solid #000", 
                    borderRadius: "8px",
                    backgroundColor: "#f0f0f0" 
                }}
            ></div>
            
            {/* Exibição do resultado da leitura */}
            <div 
                id="result" 
                style={{ 
                    marginTop: "20px", 
                    fontSize: "1.2em", 
                    color: result.startsWith("Sucesso") ? "green" : "red",
                    textAlign: "center"
                }}
            >
                {result}
            </div>
        </div>
            
            <Footer />
        </div>
        
    );
}
