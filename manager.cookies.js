window.onload = () => {

    const request = new XMLHttpRequest();
    let option1Checked = true;
    let option2Checked = true;

    const createServiceAnalytics = () => {

        request.open("POST", "https://601c4c8e1a9c2200170607b8.mockapi.io/mira-transportes", true);
        request.setRequestHeader("Content-type", "application/json");
        request.onreadystatechange = function(e) {
            
            if (request.readyState == 2 && request.status == 201) {
                console.log("Retorno do serviço realizado com sucesso!");
                console.log({
                    analyticCookies: option1Checked,
                    requiredCookies: option2Checked
                });
            }
        }
    }

    
    const createContainerPrivacy = () => {
        const containerPrivacyOptions = document.createElement('div');
            containerPrivacyOptions.setAttribute('id','container-manager-cookies');

        const dataContainer = `
            <div class="container-manager-paragraph">
                <p>
                    Utilizamos seus dados para oferecer uma experiência mais relevante ao analisar e personalizar conteúdos e anúncios em nossa plataforma e em serviços de terceiros. Ao navegar pelo site, você autoriza o Mira Transportes a coletar estes dados e utilizá-los para estes fins. Consulte nossa <a href="#" id="__btn-policy-privacy">Política de Privacidade</a> e <a href="#" id="__btn-policy-cookies">Política de Cookies</a>.
                </p>
            </div>
            <div class="container-manager-actions">
                <button class="__btn-more-options">Minhas opções</button>
                <button class="__btn-accept">Aceitar todos</button>
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
                    Este site usa cookies para melhorar sua experiência enquanto você navega pelo site. Destes, os cookies que são categorizados como necessários são armazenados no seu navegador, pois são essenciais para o funcionamento das funcionalidades básicas do site. Também usamos cookies de terceiros que nos ajudam a analisar e entender como você usa este site. Esses cookies serão armazenados em seu navegador apenas com o seu consentimento. Você também tem a opção de cancelar esses cookies. Mas desativar alguns desses cookies pode afetar sua experiência de navegação.
                </p>
            </div>
            <div class="container-options-actions">
                <ul>
                    <li class="option-1">
                        <div class="label-option">
                            <span></span> Analíticos    
                        </div>
                        <div class="action-option">
                            <div class="name-checked-1">Ativado</div> <span id="checked-1" class="checked"></span>
                        </div>
                    </li>
                    <li class="text-option-1">
                        <p>
                            Os cookies analíticos coletam informações sobre a utilização dos Sites, permitindo-nos aperfeiçoar o seu funcionamento. Os cookies analíticos, por exemplo, mostram-nos quais são as páginas mais visitadas nos Sites, ajudam-nos a registar quaisquer dificuldades que os usuários sintam na navegação nos Sites, e mostram-nos se a nossa publicidade é eficaz ou não.
                        </p>
                    </li>
                    <li class="option-2">
                        <div class="label-option">
                            <span></span> Necessários    
                        </div>
                        <div class="action-option">
                        <div class="name-checked-2">Ativado</div> <span id="checked-2" class="checked"></span>
                        </div>
                    </li>
                    <li class="text-option-2">
                        <p>
                            Os cookies necessários são absolutamente essenciais para o funcionamento adequado do site. Esta categoria inclui apenas cookies que garantem funcionalidades básicas e recursos de segurança do site. Esses cookies não armazenam nenhuma informação pessoal.
                        </p>
                    </li>
                </ul>
                <button class="__btn-accept __btn-accept-options">Salvar e aceitar</button>
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
        let objeto = {
            analyticCookies: option1Checked,
            requiredCookies: option2Checked
        }
        request.send(JSON.stringify(objeto));

        window.localStorage.setItem('manager-cookies', true);

        const removeElContainer = document.querySelector('#container-manager-cookies');
            removeElContainer.parentElement.removeChild(removeElContainer);

        const removeElModal = document.querySelector('#modal-privacy-options');
            removeElModal.parentElement.removeChild(removeElModal);

        //REMOVER ESTA LINHA
        document.querySelector("#preview-submit").innerHTML = `
            <p>{</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;analyticCookies: ${option1Checked}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requiredCookies: ${option2Checked}</p>
            <p>}</p>
        `
    }

    const closeModal = () => {
        const modal = document.querySelector("#modal-privacy-options");
            modal.classList.remove('showing-modal');
    }

    if(!window.localStorage.getItem('manager-cookies')){
        
        createContainerPrivacy();
        createModalPrivacy();
        createServiceAnalytics();

        document.querySelector('.__btn-more-options').addEventListener('click', () => {
            showModalPrivacy();
        });
    
        document.querySelector('#__btn-policy-privacy').addEventListener('click', () => {
            alert('Link de Acesso a Política de cookies');
        });
    
        document.querySelector('#__btn-policy-cookies').addEventListener('click', () => {
            alert('Link de Acesso a Política de cookies');
        });
    
        document.querySelector('.__btn-accept').addEventListener('click', () => {
            sendAndRemoveData();
        });

        document.querySelector('.__btn-accept-options').addEventListener('click', () => {
            closeModal();
            setTimeout(() => {
                sendAndRemoveData();
            }, 300);
        });
    
        document.querySelector('.option-1 .label-option').addEventListener('click', (e) => {
            if(e.currentTarget.classList.contains('actived')){
                e.currentTarget.classList.remove('actived');
                document.querySelector('.text-option-1').style.display = "none";
            }else{
                e.currentTarget.classList.add('actived');
                document.querySelector('.text-option-1').style.display = "block";
                document.querySelector('.text-option-2').style.display = "none";
                document.querySelector('.option-2 .label-option').classList.remove('actived');
            }
        });
    
        document.querySelector('.option-2 .label-option').addEventListener('click', (e) => {
            if(e.currentTarget.classList.contains('actived')){
                e.currentTarget.classList.remove('actived');
                document.querySelector('.text-option-2').style.display = "none";
            }else{
                e.currentTarget.classList.add('actived');
                document.querySelector('.text-option-1').style.display = "none";
                document.querySelector('.option-1 .label-option').classList.remove('actived');
                document.querySelector('.text-option-2').style.display = "block";
            }
        });
    
        document.querySelectorAll('.action-option span').forEach(element => {
            element.addEventListener('click', (e) => {
                if(e.currentTarget.classList.contains('checked')){
                    e.currentTarget.classList.remove('checked');
                    if(e.currentTarget.id === "checked-1"){
                        option1Checked = false;
                        document.querySelector('.name-checked-1').textContent = "Desativado";
                    }else if(e.currentTarget.id === "checked-2"){
                        option2Checked = false;
                        document.querySelector('.name-checked-2').textContent = "Desativado";
                    }
                }else{
                    if(e.currentTarget.id === "checked-1"){
                        option1Checked = true;
                        document.querySelector('.name-checked-1').textContent = "Ativado";
                    }else if(e.currentTarget.id === "checked-2"){
                        option2Checked = true;
                        document.querySelector('.name-checked-2').textContent = "Ativado";
                    }
                    e.currentTarget.classList.add('checked');
                }
            });
        });
    
        document.querySelector('.__btn-close-modal').addEventListener('click', () => {
            closeModal();
        });
    }

    
}