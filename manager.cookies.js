window.onload = () => {

    const createPopupLgpd = () => {
        const overlayPopupLgpd = document.createElement('div');
        overlayPopupLgpd.setAttribute('id', 'overlay-popup-lgpd');

        const contentPopupLgpd = document.createElement('div');
        contentPopupLgpd.setAttribute('id', 'content-popup-lgpd');

        const textPopup = `
            <div class="content">
                <button class="__btn-close-popup-lgpd">
                    X
                </button>
                <h1>
                    A Lei Geral de Proteção de Dados – LGPD
                </h1>
                <p>
                    A Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018) - é a lei brasileira que tem como principal objetivo garantir transparência e regulamentação no tratamento de dados pessoais.
                </p>
                <p>
                    Diante disso, nós do Grupo MIRA, adequamos nossos processos às diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD), seguindo as devidas premissas para atingir o compliance com as melhores práticas de mercado.
                </p>
                <p>
                    Nosso objetivo primordial é ter a transparência de que os dados pessoais serão tratados com respeito e em cumprimento às normas legais.
                </p>
                <p>
                    É um novo passo a caminho da evolução e da transformação digital, para que tudo ocorra com o máximo de zelo e respeito aos nossos clientes, colaboradores, fornecedores e demais envolvidos.
                </p>
                <p>
                    O Grupo MIRA reforça seu compromisso com essa transformação, dando seu apoio irrestrito e incondicional ao direito à privacidade e proteção dos dados dos titulares, aliados à transparência e regulamentação no tratamento destes.
                </p>
                <p>
                    Qualquer dúvida, entre em contato com nosso Comitê de Privacidade de Dados, pelo e-mail abaixo:<br><a href="mailto:lgpd@mira.com.br" target="_blank">lgpd@mira.com.br</a>
                </p>
            </div>
        `;

        contentPopupLgpd.innerHTML = textPopup;
        overlayPopupLgpd.appendChild(contentPopupLgpd);
        document.body.appendChild(overlayPopupLgpd);
    }
    
    const createContainerPrivacy = () => {
        const containerPrivacyOptions = document.createElement('div');
            containerPrivacyOptions.setAttribute('id','popup-manager-cookies');

        const dataContainer = `
            <div class="container-manager-paragraph">
                <p>
                    No GRUPO MIRA TRANSPORTES privacidade, respeito e segurança dos dados pessoais de nossos usuários e clientes são prioridades e por esta razão, estamos comprometidos na adoção de medidas para proteger as informações que você fornece para navegar em nosso site.
                </p>
                <p>
                    Para isso, instituímos nossa <strong>“Política de Privacidade”</strong>, onde você pode conferir como coletamos, tratamos e armazenamos os seus dados pessoais, garantindo assim, transparência, sigilo e devido cumprimento a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018-LGPD). 
                </p>
                <p>
                    Assim, ao clicar em “Aceito” você concorda com nossa política e a devida utilização de seus dados pessoais em nosso site, portal, software ou serviços.
                </p>
                <p>
                    Nossa <strong>“Política de Privacidade”</strong> poderá ser atualizada a qualquer tempo, tratando-se de modificações atreladas ao compartilhamento, finalidade e duração do tratamento de seus dados pessoais, reforçando assim, nosso compromisso e apoio irrestrito ao direito à sua privacidade e proteção de seus dados.
                </p>
                <p>
                    Caso tenha dúvidas ou deseje exercer qualquer direito de titular de dados pessoais, entre em contato com nosso Comitê de Privacidade de Dados, através do e.mail: <a href="mailto:lgpd@mira.com.br" target="_blank">lgpd@mira.com.br</a>
                </p>
            </div>
            <div class="container-manager-actions">
                <button class="__btn-more-options">Opção de Cookie</button>
                <button class="__btn-accept">Aceito</button>
            </div>
        `;

        containerPrivacyOptions.innerHTML = dataContainer;
        document.body.appendChild(containerPrivacyOptions);
    }

    const createModalPrivacy = () => {

        const overlayPrivacyOptions = document.createElement('div');
            overlayPrivacyOptions.setAttribute('id', 'modal-privacy-options');

        const modalPrivacyOptions = document.createElement('div');
            modalPrivacyOptions.setAttribute('id', 'content-modal-privacy-options');

        const optionsContainer = `
            <div class="container-options-paragraph">
                <button class="__btn-close-modal">
                    X
                </button>
                <h1>
                    Opções de Privacidade de dados
                </h1>
                <p>
                    Nós queremos que você tenha a melhor experiência de navegação em nosso site e para isso, utilizamos cookies com a finalidade de aprimoramento e comprometimento com sua privacidade e segurança, de acordo com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/2018). 
                </p>
                <p>
                    Ao clicar em <strong>“aceitar”</strong> você concorda com o uso que fazemos dos cookies e consente com o acesso, armazenamento e uso de seus dados pessoais de acordo com a nossa Política de Privacidade. Conheça abaixo o tipo de cookie utilizado pelo nosso site.
                </p>
            </div>
            <div class="container-options-actions">
                <ul>
                    <li class="option-1">
                        <div class="label-option actived">
                            <span></span> Coockie Necessários
                        </div>
                    </li>
                    <li class="text-option-1">
                        <p>
                            Os cookies necessários são absolutamente essenciais para o funcionamento adequado do site. Esta categoria inclui apenas cookies que garantem funcionalidades básicas e recursos de segurança do site. Esses cookies não armazenam nenhuma informação pessoal.
                        </p>
                    </li>
                </ul>
                <button class="__btn-accept __btn-accept-options">Aceitar cookies</button>
            </div>
        `;

        modalPrivacyOptions.innerHTML = optionsContainer
        overlayPrivacyOptions.appendChild(modalPrivacyOptions);
        document.body.appendChild(overlayPrivacyOptions);
    }

    const showModalPrivacy = () => {
        const modal = document.querySelector("#modal-privacy-options");

        if(modal.classList.contains('showing-modal')){
            modal.classList.remove('showing-modal');
        }else{
            modal.classList.add('showing-modal');
        }
    }

    const sendAndRemoveData = () => {

        window.localStorage.setItem('manager-cookies', true);
        const removeElContainer = document.querySelector('#popup-manager-cookies');
            removeElContainer.parentElement.removeChild(removeElContainer);

        const removeElModal = document.querySelector('#modal-privacy-options');
            removeElModal.parentElement.removeChild(removeElModal);
    }

    const closeModal = () => {
        const modal = document.querySelector("#modal-privacy-options");
            modal.classList.remove('showing-modal');
    }
    
    const closePopup = () => {
        const removePopup = document.querySelector('#overlay-popup-lgpd');
        removePopup.parentElement.removeChild(removePopup);

        window.localStorage.setItem('notice-lgpd-popup', true);
    }

    // if(!window.localStorage.getItem('manager-cookies')){
        
    //     createContainerPrivacy();
    //     createModalPrivacy();

    //     document.querySelector('.__btn-more-options').addEventListener('click', () => {
    //         showModalPrivacy();
    //     });
        
    //     document.querySelector('.__btn-accept').addEventListener('click', () => {
    //         sendAndRemoveData();
    //     });

    //     document.querySelector('.__btn-accept-options').addEventListener('click', () => {
    //         closeModal();
    //         setTimeout(() => {
    //             sendAndRemoveData();
    //         }, 300);
    //     });
    
    //     document.querySelector('.__btn-close-modal').addEventListener('click', () => {
    //         closeModal();
    //     });
    // }

    if(!window.localStorage.getItem('notice-lgpd-popup')){

        createPopupLgpd();

        setTimeout(() => {
            document.querySelector("#overlay-popup-lgpd").classList.add('showing');
            document.querySelector("#content-popup-lgpd").classList.add('showing');
        }, 500);
    
        document.querySelector('.__btn-close-popup-lgpd').addEventListener('click', () => {
            closePopup();
        });
    }
    
}