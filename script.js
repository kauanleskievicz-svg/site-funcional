const brands = [
    { name: "New Holland", icon: "🔵", origin: "EUA/Itália" },
    { name: "John Deere", icon: "🟢", origin: "EUA" },
    { name: "Massey Ferguson", icon: "🔴", origin: "Canadá/EUA" },
    { name: "Case IH", icon: "🟡", origin: "EUA" },
    { name: "Kubota", icon: "🟠", origin: "Japão" },
    { name: "Fendt", icon: "🌿", origin: "Alemanha" },
    { name: "Valtra", icon: "⚪", origin: "Finlândia/Brasil" },
    { name: "Yanmar", icon: "🔷", origin: "Japão" },
    { name: "LS Tractor", icon: "🟦", origin: "Coreia do Sul" },
    { name: "Solis", icon: "🟦", origin: "Índia" },
    { name: "Mahindra", icon: "🔶", origin: "Índia" },
    { name: "Agrale", icon: "🟥", origin: "Brasil" },
    { name: "Landini", icon: "🟩", origin: "Itália" },
    { name: "McCormick", icon: "🟪", origin: "EUA/Itália" },
    { name: "Deutz-Fahr", icon: "🟨", origin: "Alemanha" },
    { name: "Kioti", icon: "🔹", origin: "Coreia do Sul" },
    { name: "TYM", icon: "🔸", origin: "Coreia do Sul" },
    { name: "Bobcat", icon: "🟤", origin: "EUA" },
    { name: "Ford", icon: "🔷", origin: "EUA" },
    { name: "Valmet", icon: "🟥", origin: "Finlândia" }
];

const problemKeywords = {
    "motor_nao_liga": ["não liga", "motor não pega", "não dá partida", "motor gira mas não pega", "sem partida", "motor travado"],
    "motor_sem_forca": ["sem força", "motor fraco", "perda de potência", "motor cansado", "fumaça preta", "fumaça escura"],
    "hidraulico_nao_levanta": ["hidráulico não levanta", "levante não sobe", "braço hidráulico parado", "implemento não levanta"],
    "hidraulico_vazamento": ["vazamento hidráulico", "óleo hidráulico vazando", "mancha de óleo hidráulico"],
    "transmissao_patinando": ["transmissão patinando", "embreagem patinando", "marcha escapando"],
    "transmissao_nao_engata": ["marcha não engata", "câmbio travado", "dificuldade engatar marcha"],
    "eletrico_sem_energia": ["sem energia", "não acende luz", "bateria descarregada", "alternador não carrega"],
    "arrefecimento_superaquecimento": ["superaquecimento", "motor esquentando", "temperatura alta", "água fervendo"],
    "freios_falhando": ["freio não funciona", "pedal de freio baixo", "freio fraco"],
    "direcao_pesada": ["direção pesada", "volante duro", "direção com folga"],
    "geral": ["problema geral", "ruído estranho", "vibração"]
};

const solutionDatabase = {
    "motor_nao_liga": {
        icon: "🔋",
        title: "Problema: Motor Não Liga",
        causes: ["Bateria fraca ou descarregada", "Terminais da bateria oxidados ou soltos", "Motor de arranque com defeito", "Sensores de segurança travados", "Combustível contaminado", "Fusível principal queimado", "Relé de partida com defeito", "Ar no sistema de combustível"],
        solutions: ["1. Verifique a tensão da bateria (mínimo 12V). Se baixa, carregue ou substitua.", "2. Limpe os terminais da bateria com escova de aço.", "3. Verifique se o pedal de embreagem está sendo pressionado.", "4. Drene a água do filtro separador.", "5. Verifique todos os fusíveis.", "6. Se o motor gira mas não pega, sangre o sistema de injeção (diesel).", "7. Teste o motor de arranque e relé."],
        recommendation: "🔴 URGENTE — Não tente forçar a partida repetidamente. Verifique bateria e combustível.",
        videos: [
            { title: "Trator não pega? O que pode ser?", url: "https://www.youtube.com/watch?v=iQUSlWfQk7U", source: "YouTube" },
            { title: "Como sangrar o sistema de diesel", url: "https://www.youtube.com/watch?v=23IbogfeCbU", source: "YouTube" },
            { title: "Bateria do trator: Manutenção", url: "https://www.youtube.com/watch?v=vN5Lp3kpHg4", source: "YouTube" }
        ],
        manuals: [
            { title: "Guia de Manutenção de Motores Diesel", description: "Manual técnico completo sobre sistemas de partida", icon: "📘", url: "https://www.cnabrasil.org.br/assets/arquivos/130-TRATORES-AGR%C3%8DCOLAS.pdf" },
            { title: "Manual de Serviço - Sistemas Elétricos", description: "Esquemas elétricos e diagnóstico", icon: "📗", url: "https://deutz-fahramerica.com/downloads/" }
        ]
    },
    "motor_sem_forca": {
        icon: "⚡",
        title: "Problema: Motor Sem Força / Perda de Potência",
        causes: ["Filtro de ar obstruído", "Filtro de combustível entupido", "Bicos injetores desregulados", "Turbocompressor com defeito", "Bomba injetora com problema", "Combustível de qualidade ruim", "Intercooler com vazamento", "Válvula EGR entupida", "Baixa compressão"],
        solutions: ["1. Limpe ou troque o filtro de ar.", "2. Troque o filtro de combustível e drene água.", "3. Verifique a pressão do turbo.", "4. Use combustível de qualidade certificada.", "5. Leve a um bombista para calibrar bicos.", "6. Verifique mangueiras do intercooler.", "7. Se persistir, verifique compressão do motor."],
        recommendation: "🟡 ATENÇÃO — Perda de potência reduz produtividade. Verifique filtros e sistema de injeção.",
        videos: [
            { title: "Trator fraco? Limpeza de filtros", url: "https://www.youtube.com/watch?v=AmUc1AKWi9w", source: "YouTube" },
            { title: "Turbocompressor: Diagnóstico", url: "https://www.youtube.com/watch?v=vN5Lp3kpHg4", source: "YouTube" },
            { title: "Qualidade do combustível", url: "https://www.youtube.com/watch?v=It0V69fVgto", source: "YouTube" }
        ],
        manuals: [
            { title: "Sistema de Injeção Diesel", description: "Procedimentos de calibração de bicos", icon: "📘", url: "https://www.cnabrasil.org.br/assets/arquivos/130-TRATORES-AGR%C3%8DCOLAS.pdf" },
            { title: "Manutenção de Filtros", description: "Guia completo sobre seleção de filtros", icon: "📗", url: "https://aegro.com.br/blog/manutencao-de-tratores/" }
        ]
    },
    "hidraulico_nao_levanta": {
        icon: "⬆️",
        title: "Problema: Levante Hidráulico Não Sobe",
        causes: ["Nível de óleo hidráulico baixo", "Filtro hidráulico entupido", "Bomba hidráulica desgastada", "Válvula de alívio travada", "Vazamento interno no cilindro", "Comando hidráulico com defeito", "Ar no sistema hidráulico", "Engate rápido com problema"],
        solutions: ["1. Verifique e complete o nível de óleo hidráulico.", "2. Troque o filtro hidráulico.", "3. Verifique a pressão com manômetro.", "4. Inspecione comando e válvulas.", "5. Verifique cilindro quanto a vazamentos.", "6. Se intermitente, pode ser ar - operate o levante várias vezes.", "7. Consulte manual para calibração."],
        recommendation: "🔴 URGENTE — Falha no levante impede uso de implementos. Ações rápidas são necessárias.",
        videos: [
            { title: "Identificando falhas hidráulicas", url: "https://www.youtube.com/watch?v=It0V69fVgto", source: "YouTube" },
            { title: "Hidráulico sem força: Como resolver", url: "https://www.youtube.com/watch?v=3AWwjr3hJ6M", source: "YouTube" },
            { title: "Manutenção de sistemas hidráulicos", url: "https://www.youtube.com/watch?v=YtrvHE3Igy4", source: "YouTube" }
        ],
        manuals: [
            { title: "Sistemas Hidráulicos - Guia Técnico", description: "Pressões e procedimentos de manutenção", icon: "📘", url: "https://www.sistemafaep.org.br/wp-content/uploads/2021/11/PR.0348-Manutencao-de-tratores-agricolas.pdf" },
            { title: "Manual de Serviço Hidráulico", description: "Diagramas e procedimentos específicos", icon: "📗", url: "https://www.yanmartractorstore.com/online-tractor-service-center" }
        ]
    },
    "geral": {
        icon: "❓",
        title: "Problema Geral / Não Classificado",
        causes: ["Problema não específico", "Necessidade de inspeção aprofundada", "Componente não coberto"],
        solutions: ["1. Realize inspeção visual completa.", "2. Verifique todos os níveis de fluidos.", "3. Consulte o manual do proprietário.", "4. Anote todos os sintomas.", "5. Procure um mecânico especializado."],
        recommendation: "⚠️ ATENÇÃO — Problemas não identificados podem evoluir. Uma inspeção detalhada é recomendada.",
        videos: [
            { title: "Manutenção Preventiva Completa", url: "https://www.youtube.com/watch?v=JfZ3XpaljEE", source: "YouTube" },
            { title: "Como identificar ruídos estranhos", url: "https://www.youtube.com/watch?v=It0V69fVgto", source: "YouTube" }
        ],
        manuals: [
            { title: "Apostila Completa de Manutenção", description: "Guia abrangente de sistemas", icon: "📘", url: "https://pt.scribd.com/document/370511175/Apostila-de-Manutencao-de-Tratores-e-Motores" },
            { title: "Manual do Proprietário", description: "Informações detalhadas de operação", icon: "📗", url: "https://www.yanmartractorstore.com/online-tractor-service-center" }
        ]
    }
};

const brandTips = {
    "new holland": "💡 Dica New Holland: Verifique o sistema Lift-O-Matic. Modelos T-series têm transmissão Electro-Command com diagnóstico eletrônico.",
    "john deere": "💡 Dica John Deere: Use peças originais. Modelos PowerShift têm diagnóstico via terminal.",
    "case ih": "💡 Dica Case IH: Modelos Farmall/Puma têm sistema AFS para diagnóstico remoto. Verifique sensores de segurança.",
    "kubota": "💡 Dica Kubota: Sensíveis a combustível ruim. Use diesel certificado. Radiador é ponto crítico.",
    "fendt": "💡 Dica Fendt: Transmissão Vario possui diagnóstico eletrônico. Manutenção preventiva é essencial.",
    "valtra": "💡 Dica Valtra: Modelos HiTech têm reversor eletro-hidráulico. Fabricado em Mogi das Cruzes, SP.",
    "solis": "💡 Dica Solis: Marca em expansão no Brasil. Verifique qualidade do óleo hidráulico.",
    "mahindra": "💡 Dica Mahindra: Maior fabricante por volume. Modelos confiáveis requerem manutenção regular.",
    "ford": "💡 Dica Ford: Tratores clássicos. Peças de reposição fáceis de encontrar.",
    "valmet": "💡 Dica Valmet: Precursor do Valtra. Modelos clássicos muito usados no Brasil."
};

function renderBrands() {
    const grid = document.getElementById('brandsGrid');
    grid.innerHTML = '';
    brands.forEach(brand => {
        const item = document.createElement('div');
        item.className = 'brand-item';
        item.innerHTML = '<div class="brand-item-icon">' + brand.icon + '</div><div class="brand-item-name">' + brand.name + '</div><div class="brand-item-origin">' + brand.origin + '</div>';
        item.onclick = () => {
            document.getElementById('brand').value = brand.name;
            document.getElementById('brand').focus();
        };
        grid.appendChild(item);
    });
}

function identifyProblemType(problemText) {
    const text = problemText.toLowerCase();
    for (const type in problemKeywords) {
        for (const keyword of problemKeywords[type]) {
            if (text.includes(keyword)) {
                return type;
            }
        }
    }
    return "geral";
}

function renderVideos(videos) {
    if (!videos || videos.length === 0) return '';
    let html = '<div class="result-section"><h3>▶️ Vídeos Relacionados</h3><div class="videos-container">';
    videos.forEach(video => {
        html += '<div class="video-card"><div class="video-thumbnail">📹</div><div class="video-info"><div class="video-title">' + video.title + '</div><div class="video-source">' + video.source + '</div><a href="' + video.url + '" target="_blank" class="video-link">Assistir</a></div></div>';
    });
    html += '</div></div>';
    return html;
}

function renderManuals(manuals) {
    if (!manuals || manuals.length === 0) return '';
    let html = '<div class="result-section"><h3>📚 Manuais e Documentação</h3><div class="manuals-container">';
    manuals.forEach(manual => {
        html += '<div class="manual-card"><div class="manual-icon">' + manual.icon + '</div><div class="manual-title">' + manual.title + '</div><div class="manual-description">' + manual.description + '</div><a href="' + manual.url + '" target="_blank" class="manual-link">Acessar</a></div>';
    });
    html += '</div></div>';
    return html;
}

function generateDiagnosis(brand, model, year, problem) {
    const problemType = identifyProblemType(problem);
    const solution = solutionDatabase[problemType] || solutionDatabase["geral"];
    const brandLower = brand.toLowerCase();
    let tip = '';
    for (const key in brandTips) {
        if (brandLower.includes(key)) {
            tip = brandTips[key];
            break;
        }
    }

    let html = '<div class="result-card"><div class="result-header"><div class="result-icon">' + solution.icon + '</div><div class="result-info"><h2>' + solution.title + '</h2><p><strong>Trator:</strong> ' + brand + ' ' + model + ' ' + (year ? '(' + year + ')' : '(Ano desconhecido)') + '</p></div></div>';
    
    html += '<div class="result-section"><h3>📋 Problema Relatado</h3><p>"' + problem + '"</p></div>';
    
    html += '<div class="result-section"><h3>🔍 Causas Prováveis</h3><ul>';
    solution.causes.forEach(cause => {
        html += '<li>' + cause + '</li>';
    });
    html += '</ul></div>';
    
    html += '<div class="result-section"><h3>🔧 Procedimento de Solução</h3><ol>';
    solution.solutions.forEach(sol => {
        html += '<li style="margin-bottom: 0.8rem;">' + sol + '</li>';
    });
    html += '</ol></div>';
    
    html += '<div class="recommendation-box"><strong>⚠️ Recomendação de Urgência:</strong> ' + solution.recommendation + '</div>';
    
    if (tip) {
        html += '<div class="recommendation-box" style="border-left-color: var(--info); margin-top: 1.5rem;">' + tip + '</div>';
    }
    
    html += renderVideos(solution.videos);
    html += renderManuals(solution.manuals);
    
    html += '<div class="result-section" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #eee;"><h3>💡 Próximos Passos</h3><ul><li>Se o problema persistir, procure um <strong>mecânico especializado</strong>.</li><li>Sempre consulte o <strong>manual do proprietário</strong>.</li><li>Mantenha um <strong>registro de manutenção</strong>.</li><li>Realize <strong>manutenção preventiva</strong> regularmente.</li></ul></div></div>';
    
    return html;
}

function runDiagnosis(event) {
    event.preventDefault();
    const brand = document.getElementById('brand').value.trim();
    const model = document.getElementById('model').value.trim();
    const year = document.getElementById('year').value;
    const problem = document.getElementById('problem').value.trim();

    if (!brand || !model || !problem) {
        showError("Por favor, preencha os campos obrigatórios: Marca, Modelo e Problema.");
        return;
    }

    const resultsContainer = document.getElementById('resultsContainer');
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '<div style="text-align: center; padding: 2rem;"><div class="loading"></div><p>Analisando seu problema...</p></div>';
    resultsContainer.classList.add('show');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        const diagnosis = generateDiagnosis(brand, model, year, problem);
        resultsContent.innerHTML = diagnosis;
        showToast('✅ Diagnóstico gerado para ' + brand + ' ' + model);
    }, 1500);
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    event.target.classList.add('active');
}

function showError(msg) {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '<div class="error-message">' + msg + '</div>';
    resultsContainer.classList.add('show');
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 400) btn.classList.add('show');
    else btn.classList.remove('show');
});

renderBrands();
