// Base de dados simulada para o acervo (com contagem de downloads e avaliações)

let livros = [
    { id: 1, titulo: "A Inteligência Artificial nas Ciências de Dados", organizador: "Luciane Ferreira Alcoforado, João Paulo Marins dos Santos, Orlando Celso Longo, Ariel Levy, Juan López Linares, Jessica Kubrusly", genero: "Ciência da Computação", paginas: 196, desc: "Este livro apresenta técnicas e algoritmos de Inteligência Artificial aplicados à Ciência de Dados, com foco em análise, predição e automação. A IA é destacada como uma ferramenta capaz de processar grandes volumes de dados com rapidez e precisão, acelerando descobertas em diversas áreas do conhecimento. A obra reúne seis capítulos escritos por sete autores de instituições de renome, que exploram temas variados em torno do assunto central. É especialmente indicada para quem deseja começar a usar IA em programação, sobretudo com a linguagem R.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/1492", tipoAcao: "externo", comentarios: [] },
    { id: 2, titulo: "Entendendo e dominando o Linux", autor: "Carlos Eduardo Morimoto", genero: "Ciência da Computação", paginas: 394, desc: "Este é um Guia para quem está dando seus primeiros passos no Linux e deseja conhecer os recursos do sistema.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/entendendo-e-dominando-o-linux.pdf", tipoAcao: "download", comentarios: [] },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Romance", paginas: 105, desc: "Bento Santiago, o Bentinho, narra sua vida já na velhice, desde a infância no Rio de Janeiro. Prometido ao seminário pela mãe, ele se apaixona por Capitu, a vizinha de “olhos de ressaca”, e acaba se casando com ela. Aos poucos, o ciúme o convence de que ela o traiu com o melhor amigo, Escobar. A dúvida sobre a traição, contada só pelo ponto de vista de Bento, é o grande enigma da literatura brasileira.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/domcasmurro-machado-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 4, titulo: "Helena", autor: "Machado de Assis", genero: "Romance", paginas: 93, desc: "Após a morte do Conselheiro Vale, seu testamento revela que Helena, uma jovem desconhecida, é filha dele e deve ser acolhida pela família. Ela conquista a todos com sua delicadeza, mas guarda um segredo que a faz viver entre a dissimulação e a culpa. Seu convívio com o “irmão” Estácio vai se tornando um amor impossível. É um romance de feição ainda romântica, com um desfecho trágico.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/helena-machado-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 5, titulo: "Quincas Borba", autor: "Machado de Assis", genero: "Romance", paginas: 314, desc: "O professor Rubião herda a fortuna do filósofo Quincas Borba, criador do Humanitismo, com a condição de cuidar do cão que leva o mesmo nome. Rubião se muda para o Rio de Janeiro e vira presa fácil de aproveitadores, como Palha e Sofia, por quem se apaixona. Aos poucos, perde o dinheiro e a razão. O romance mostra a ambição e a crueldade de uma sociedade que vive de aparências.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/quincasborba-machado-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 6, titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", genero: "Romance", paginas: 145, desc: "O próprio Brás Cubas, já morto, conta sua vida com ironia e sem pudores, dedicando o livro “ao verme que primeiro roeu as frias carnes do meu cadáver”. Ele relembra seus amores, em especial Virgília, sua ambição política frustrada e a convivência com Quincas Borba. O livro inaugura o Realismo no Brasil e faz uma crítica ácida à vaidade e à hipocrisia da elite do século XIX.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/memorias-postumas-machado-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 7, titulo: "A Divina Comédia", autor: "Dante Alighieri", genero: "Poesia", paginas: 788, desc: "O poeta Dante narra sua viagem pelo além-túmulo: guiado por Virgílio, atravessa o Inferno e o Purgatório, e, por Beatriz, chega ao Paraíso. A cada etapa, encontra figuras históricas, mitológicas e conhecidos seus, punidos ou recompensados conforme suas ações. É uma grande alegoria da busca da alma por Deus, e um retrato da Idade Média, de sua fé e de sua política.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "adivinacomedia-dantealighieri-p.pdf", tipoAcao: "download", comentarios: [] },
    { id: 8, titulo: "O Navio Negreiro", autor: "Castro Alves", genero: "Poesia", paginas: 15, desc: "Poema narrativo em que o eu lírico, no alto-mar, vê um navio carregado de africanos escravizados. A cena começa com a beleza do oceano e logo se transforma em horror, ao descrever a dor, a violência e o desespero no porão. No final, o poeta clama contra a escravidão e pede que a bandeira brasileira não cubra tamanha vergonha. É um dos maiores textos da poesia abolicionista.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/onavionegreiro-castroalves-p.pdf", tipoAcao: "download", comentarios: [] },
    { id: 9, titulo: "Vidas Secas", autor: "Graciliano Ramos", genero: "Romance", paginas: 204, desc: "Fabiano, Sinhá Vitória, os dois filhos e a cachorra Baleia fogem da seca pelo sertão nordestino em busca de sobrevivência. Quase sem palavras, vivem humilhados pela pobreza e pela autoridade, mas sonham com uma vida melhor. A morte de Baleia é uma das cenas mais comoventes da nossa literatura. O livro é um retrato seco e humano da miséria no Nordeste.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/vidassecas-graciliano-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 10, titulo: "Os Maias", autor: "Eça de Queirós", genero: "Romance", paginas: 288, desc: "Acompanha três gerações da família Maia, em especial Carlos da Maia, jovem médico culto e rico que vive na Lisboa do século XIX. Ele se apaixona por Maria Eduarda, sem saber que um segredo do passado liga os dois. Entre bailes, jantares e intrigas, o romance critica a sociedade portuguesa e termina em tragédia.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/osmaias-queiros-r.pdf", tipoAcao: "download", comentarios: [] },
    { id: 11, titulo: "A Megera Domada", autor: "William Shakespeare", genero: "Teatro", paginas: 108, desc: "Em Pádua, Batista só permite que a bela Bianca se case depois que sua irmã mais velha, Catarina, de temperamento explosivo, arranje marido. Petruchio, um aventureiro interessado no dote, aceita o desafio e tenta “domá-la” com sua própria teimosia. Enquanto isso, pretendentes de Bianca armam disfarces e confusões. É uma comédia sobre casamento, dinheiro e poder que ainda gera debate.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/a-megera-domada-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 12, titulo: "Hamlet", autor: "William Shakespeare", genero: "Teatro", paginas: 162, desc: "O príncipe da Dinamarca descobre, pelo fantasma do pai, que o tio Cláudio o assassinou para tomar o trono e casar-se com a rainha Gertrudes. Dividido entre a vingança e a dúvida, Hamlet finge loucura e arma um plano para provar a culpa do tio. A hesitação leva a uma sequência de mortes, incluindo a de Ofélia. A peça trata de vingança, loucura e moral.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/hamlet-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 13, titulo: "Romeu e Julieta", autor: "William Shakespeare", genero: "Teatro", paginas: 119, desc: "Em Verona, Romeu, dos Montecchios, e Julieta, dos Capuletos, famílias inimigas, se apaixonam num baile e se casam em segredo. Uma briga de rua termina em mortes e no exílio de Romeu. Um plano para reuni-los dá errado, e a incompreensão leva os dois a um fim trágico. A morte dos jovens finalmente reconcilia as famílias.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/romeu-e-julieta-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 14, titulo: "Macbeth", autor: "William Shakespeare", genero: "Teatro", paginas: 136, desc: "Após a vitória em batalha, o general escocês Macbeth ouve de três bruxas a profecia de que será rei. Incentivado pela ambiciosa Lady Macbeth, assassina o rei Duncan e toma o trono. Para se manter no poder, comete novos crimes e é consumido pela culpa e pela paranoia. A peça mostra como a ambição desmedida destrói quem a alimenta.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/macbeth-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 15, titulo: "Otelo", autor: "William Shakespeare", genero: "Teatro", paginas: 134, desc: "Otelo, general mouro a serviço de Veneza, casa-se em segredo com Desdêmona. Iago, ressentido por ter sido preterido numa promoção, o convence de que ela o trai com Cássio. Cego pelo ciúme, Otelo se deixa manipular e comete um ato irreparável. É uma tragédia sobre ciúme, inveja e a facilidade com que a confiança pode ser destruída.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/otelo-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 16, titulo: "Sonho de uma Noite de Verão", autor: "William Shakespeare", genero: "Teatro", paginas: 79, desc: "Numa floresta perto de Atenas, quatro jovens apaixonados se perdem em um enredo de amores trocados, enquanto atores amadores ensaiam uma peça. As fadas Oberon e Titânia brigam, e o travesso Puck usa uma poção mágica que faz as pessoas se apaixonarem pela pessoa errada. Depois de muita confusão, tudo se acerta. É uma comédia sobre amor, ilusão e magia.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/sonho-de-uma-noite-de-verao-ws-t.pdf", tipoAcao: "download", comentarios: [] },
    { id: 17, titulo: "Inteligência Artificial: Avanços e Tendências", organizador: "Fabio G. Cozman, Guilherme Ary Plonski e Hugo Neri", genero: "Ciência da Computação", paginas: 414, desc: "Este livro mostra que a Inteligência Artificial atual já faz parte do mundo real e influencia a sociedade, trazendo para o debate cenários antes restritos à ficção científica. A relação entre IA e sociedade é apresentada como um eixo essencial no estudo dessa tecnologia. A obra reúne diálogos interdisciplinares, com textos das Ciências da Computação e das Humanidades, que refletem sobre como diferentes áreas têm integrado e aplicado a IA. O conteúdo está dividido em uma seção introdutória e três seções: “Ética e Estética”, “Ciências” e “Ciências Sociais Aplicadas”, combinando reflexões abstratas e aplicadas.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosusp/catalog/book/650", tipoAcao: "externo", comentarios: [] },
    { id: 18, titulo: "Introdução à Robótica Educacional com Arduíno - Hands On! - Iniciante", autor: "Marcelo Eduardo de Oliveira, Matheus Fernando Lima Zuccherelli, Giovanni Polette Dalla Libera, Renata Lima Zuccherelli de Oliveira e Adriano Rogério Bruno Tech", genero: "Ciência da Computação", paginas: 53, desc: "Este livro apresenta o Arduino, uma plataforma eletrônica open source que integra hardware e software de forma simples, permitindo que pessoas com pouco conhecimento na área aprendam eletrônica básica e programação. A obra é voltada a alunos e iniciantes e traz quinze atividades básicas com Arduino, incluindo a montagem completa dos circuitos. A proposta didática é ser direta e objetiva, colocando-se no lugar de quem aprende.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/483", tipoAcao: "externo", comentarios: [] },
    { id: 19, titulo: "Direitos Humanos das Mulheres: Práticas, Pesquisas e Reflexões", organizador: "Gislene Aparecida dos Santos - Instituto de Estudos Avançados da USP", genero: "Direito", paginas: 345, desc: "Este livro detalha a atuação da Clínica de Direitos Humanos das Mulheres da USP e serve tanto como fonte de informação quanto de inspiração para trabalhar o tema de forma interdisciplinar. Apresenta projetos em diversos formatos, como pesquisa acadêmica, parcerias internacionais, atenção a mulheres de grupos vulnerabilizados, assessoria jurídica, educação em direitos humanos e iniciação científica para estudantes de escolas públicas. Inclui ainda produção audiovisual, com vídeos, podcasts e cartilhas educativas. A obra é essencial para quem busca exemplos, métodos e conhecimentos para se envolver com um tema cada vez mais importante para a formação da sociedade.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/1881", tipoAcao: "externo", comentarios: [] },
    { id: 20, titulo: "O Direito da Sociedade Digital: Tecnologia, Inovação Jurídica e Aprendizagem Regulatória", autor: "Lucas Fucci Amato", genero: "Direito", paginas: 222, desc: "Este livro parte da teoria dos sistemas sociais de Niklas Luhmann, concluída nos anos 1990, quando a internet começava a se massificar. Nela, cada setor da sociedade (direito, política, economia, ciência, arte, educação) é uma rede autorreferencial de comunicações organizada por um código binário, como lícito/ilícito ou verdade/falsidade. Diante da digitalização de pagamentos, ensino, decisões e relações de consumo, e de temas como inteligência artificial, fake news, big data e privacidade de dados, a obra investiga se essa teoria pode ser atualizada para descrever os desafios do sistema jurídico. Questiona ainda como o direito vem se construindo para proteger a sociedade digital da incerteza radical, da desinformação massiva e da perda de referências de sentido.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/1314", tipoAcao: "externo", comentarios: [] },
    { id: 21, titulo: "Sociologia e História do Constitucionalismo Brasileiro", organizador: "Lucas Fucci Amato e Rodrigo Marchetti Ribeiro", genero: "Direito", paginas: 412, desc: "Este livro reúne estudos sobre os 200 anos do constitucionalismo brasileiro, combinando abordagens de história e sociologia da Constituição. Os ensaios percorrem desde o Império e a Constituição de 1824 até as pressões recentes sobre o quadro institucional criado pela Constituição de 1988. Entre os temas tratados estão a independência do Judiciário, o federalismo, o presidencialismo de coalizão, o orçamento e a dívida pública, o papel das Forças Armadas e a jurisdição constitucional. As análises foram produzidas no Programa de Pós-Graduação em Direito da Faculdade de Direito da USP.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://www.livrosabertos.abcd.usp.br/portaldelivrosUSP/catalog/book/1384", tipoAcao: "externo", comentarios: [] },
    { id: 22, titulo: "Arte Poética", autor: "Aristóteles", genero: "Filosofia", paginas: 88, desc: "Escrita no século IV a.C., a Poética é o primeiro tratado sistemático sobre teoria literária do Ocidente. Aristóteles define a poesia como imitação (mimesis) das ações humanas e dedica-se sobretudo à tragédia, que descreve como a representação de uma ação séria e completa, capaz de provocar piedade e temor e, assim, a catarse do espectador. Analisa seus elementos essenciais: enredo (mythos), personagens, pensamento, elocução, melodia e espetáculo, com destaque para o enredo e para conceitos como peripécia, reconhecimento e erro trágico (hamartia). A obra também trata brevemente da epopeia e contrasta poesia e história, afirmando que a primeira se ocupa do universal e do possível. Chegou até nós de forma incompleta, sem a parte dedicada à comédia.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/artepoetica-aristoteles-f.pdf", tipoAcao: "download", comentarios: [] },
    { id: 23, titulo: "História da Conjuração Mineira", autor: "Joaquim Norberto de Souza e Silva", genero: "História", paginas: 174, desc: "Publicada em 1873, a obra é um dos primeiros estudos históricos aprofundados sobre a Inconfidência Mineira, o movimento de 1789 que buscou romper com o domínio português em Minas Gerais. Apoiado nos autos da devassa e em documentos da época, o autor reconstitui o contexto de crise do ciclo do ouro, a pressão fiscal da Coroa e a ameaça da derrama. Apresenta os conjurados, entre eles Tiradentes e os poetas Cláudio Manuel da Costa, Tomás Antônio Gonzaga e Alvarenga Peixoto, além da delação, das prisões e do processo que levou às condenações. Com tom patriótico e documental, o livro contribuiu para consolidar a memória heroica dos inconfidentes e de Tiradentes no imaginário nacional.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/historia-da-conjuracao-mineira-joaquim-norberto-h.pdf", tipoAcao: "download", comentarios: [] },
    { id: 24, titulo: "História da Literatura Brasileira", autor: "José Veríssimo", genero: "História", paginas: 200, desc: "Publicada em 1916, a obra percorre a produção literária do Brasil desde os primórdios, no período colonial, até Machado de Assis e a geração de seu tempo, a quem o autor dedica o fecho do livro. Veríssimo defende que só merece o nome de literatura brasileira aquilo que revela consciência de autonomia em relação a Portugal, e por isso trata os escritos dos séculos XVI e XVII como manifestações ainda embrionárias. Organiza a matéria em fases, de acordo com o desenvolvimento da sensibilidade nacional, e dá especial atenção ao Romantismo e à ruptura com os moldes portugueses. Seu método combina o estudo das obras com o das circunstâncias históricas e sociais, em tom crítico e por vezes severo. Tornou-se uma referência para a historiografia literária brasileira, ao lado das obras de Sílvio Romero.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "assets/livros/historia-literatura-brasileira-jose-verissimo-h.pdf", tipoAcao: "download", comentarios: [] },
    { id: 25, titulo: "Economia da Previdência - Teoria, desenho e avaliação", autor: "Otávio José Guerci Sidone e Luís Eduardo Afonso", genero: "Economia", paginas: 502, desc: "Este livro-texto apresenta, de forma didática e em linguagem acessível, os principais elementos do desenho, da implantação e da avaliação da política previdenciária, tema central para o Brasil diante da intensa transformação demográfica prevista para os próximos anos. De caráter multidisciplinar, a obra preenche lacunas pouco exploradas ao articular finanças públicas, seguro privado e social, macroeconomia e microeconomia. Cada capítulo traz exercícios que permitem ao professor verificar se os objetivos de aprendizagem foram alcançados. Destina-se a estudantes de graduação e pós-graduação, pesquisadores, profissionais e formuladores de políticas públicas, além de contribuir para a formação de gestores da área previdenciária. Integra a Coleção ABCD Agenda 2030 e está alinhada aos ODS 1 (erradicação da pobreza), 8 (trabalho decente e crescimento econômico) e 10 (redução das desigualdades).", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/1642", tipoAcao: "externo", comentarios: [] },
    { id: 26, titulo: "Expressões da Economia como Ciência Social", organizador: "Rita de Cássia Marques Lima de Castro, Maria Cristina Cacciamali e Júlio César Suzuki", genero: "Economia", paginas: 447, desc: "Este e-book parte da ideia de que a Economia é, em essência, uma ciência social, e busca evidenciar sua interdisciplinaridade com as demais Ciências Sociais ao examinar as relações de troca entre pessoas, firmas e governos em diferentes contextos históricos e geográficos. Os trabalhos reunidos abordam temas como os desafios do desenvolvimento sustentável, economia e política, o papel do Estado na economia, aspectos comportamentais, teoria da escolha racional, economia do bem-estar, desenvolvimento socioeconômico, intuições e fake news, geografia urbana e desigualdade. A obra convida o leitor a refletir sobre o “pensar a Economia” para além das fronteiras de um único campo do conhecimento, favorecendo a compreensão da Ciência Econômica em seus aspectos sociais.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/677", tipoAcao: "externo", comentarios: [] },
    { id: 27, titulo: "Sólon de Atenas - A cidadania antiga", autor: "Gilda Naécia Maciel de Barros", genero: "Filosofia", paginas: 180, desc: "Este livro tem origem na tese de doutoramento “Sólon, uma Paideia para a Cidadania”, apresentada à Faculdade de Educação da USP em 1973, e foi reexaminado de forma mais ampla, tanto na bibliografia quanto na forma, para esta publicação. O texto original foi simplificado e reelaborado, deixando de lado observações mais próprias de um trabalho voltado à obtenção de grau acadêmico. A obra propõe estimular uma reflexão específica sobre o tema “Cidadania e Educação”, defendendo que ele pode ser iluminado pela leitura dos autores antigos, a começar por Sólon, o ateniense.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/455", tipoAcao: "externo", comentarios: [] },
    { id: 28, titulo: "Estudo Bibliográfico comentado da Guerra do Paraguai", autor: "Sinésio de Siqueira Filho", genero: "História", paginas: 786, desc: "Em 2024, a Biblioteca Brasiliana Guita e José Mindlin recebeu a Coleção Sinésio de Siqueira Filho, sua segunda maior doação, com cerca de quatro mil livros e documentos raros sobre a Guerra do Paraguai. Formada ao longo de décadas de garimpagem, estudo e convívio com fontes primárias, a coleção deu origem a este Estudo Bibliográfico Comentado, um roteiro único que reúne diversas dimensões e versões do conflito. Com comentários úteis a pesquisadores iniciantes e experientes e a leitores interessados no tema, a obra reflete não só a história da guerra, mas também as muitas interpretações e estudos que a cercam, tornando-se um marco para quem busca compreendê-la.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/1714", tipoAcao: "externo", comentarios: [] },
    { id: 29, titulo: "Estudos de graduação: Graciliano Ramos, Guimarães Rosa e Clarice Lispector", organizador: "Jaime Ginzburg", genero: "Letras", paginas: 128, desc: "Este livro reúne textos de análise e interpretação de obras literárias brasileiras do século XX, produzidos por duas turmas da disciplina FLC 0201 (Literatura Brasileira II) do curso de Letras da FFLCH-USP, no segundo semestre de 2017. Centrados em Graciliano Ramos, Guimarães Rosa e Clarice Lispector, os trabalhos de avaliação foram revisados e adaptados para publicação. A obra mostra a seriedade, a dedicação e a capacidade de pesquisa presentes nas salas de aula da graduação. Pode ser útil a professores da rede escolar na preparação de aulas, a estudantes na elaboração de trabalhos e a quem se interessa por esses três autores, além de afirmar o valor de ocupar a sala de aula e ter o pensamento respeitado.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/386", tipoAcao: "externo", comentarios: [] },
    { id: 30, titulo: "Comparativismo hoje: As Literaturas e Culturas de Língua Portuguesa", organizador: "Aparecida de Fátima Bueno, Edson Salviano Nery, Mauricio Salles Vasconcelos e Paulo Fernando Motta Oliveira", genero: "Letras", paginas: 416, desc: "Este e-book celebra o XVI Encontro de Estudos Comparados de Literaturas de Língua Portuguesa, realizado em 2016 na FFLCH-USP, e registra a atuação da área, integrada ao Departamento de Letras Clássicas e Vernáculas, em sintonia com a força que o comparativismo literário vem ganhando na contemporaneidade. Em Comparativismo hoje: as literaturas e culturas de língua portuguesa, os trabalhos oferecem um mapeamento renovador de tendências estéticas e conceituais, que dialoga tanto com a esfera da textualidade quanto com o plano das geopolíticas. A obra considera os processos inventivos de língua e linguagem e as formas de viver e atuar em diversos contextos culturais, tomados em sua variação mais viva e em plena ressonância criadora.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/400", tipoAcao: "externo", comentarios: [] },
    { id: 31, titulo: "Caminhando pela Filologia e Língua Portuguesa", organizador: "Verena Kewitz, Rosane de Sá Amado, Valéria Gil Condé, Zilda Gaspar Oliveira de Aquino e Luiz Antônio da Silva", genero: "Letras", paginas: 309, desc: "O livro Caminhando pela Filologia e Língua Portuguesa reúne quinze capítulos de alunos e um de ex-aluno do Programa de Pós-Graduação em Filologia e Língua Portuguesa da USP. Os textos foram avaliados e aprovados por pareceristas da área, que compõem a Comissão Científica da obra e, em sua maioria, atuaram também como debatedores dos trabalhos apresentados no III Colóquio de Pesquisa Discente, realizado em novembro de 2022. Algumas pesquisas estão em fase inicial, outras mais avançadas ou em conclusão, e todas retratam os caminhos percorridos ou em andamento, em qualquer ponto do percurso científico.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/1068", tipoAcao: "externo", comentarios: [] },
    { id: 32, titulo: "A subcriação de mundos: Estudos sobre a literatura de J.R.R. Tolkien", organizador: "Cristina Casagrande, Diego Genu Klautau e Maria Zilda da Cunha", genero: "Letras", paginas: 346, desc: "A subcriação de mundos: estudos sobre a literatura de J. R. R. Tolkien reúne ensaios que apresentam uma diversidade de perspectivas teóricas e abordagens temáticas, desdobradas a partir de um curso de difusão ministrado na FFLCH-USP em 2018. A publicação ganha profundidade com a participação de entusiastas e pesquisadores que trazem reflexões contemporâneas sobre a vida e a obra de John Ronald Reuel Tolkien. As ideias dialogam com os estudos das artes, da filosofia, da ciência da religião, da literatura de recepção juvenil e dos estudos comparados de literatura, entre outros campos do saber. A obra representa um importante esforço investigativo e a promessa de continuidade de diálogos e reflexões.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/405", tipoAcao: "externo", comentarios: [] },
    { id: 33, titulo: "Elementos principais da Geometria Descritiva", autor: "Alexandre Kawano e João Petreche", genero: "Matemática", paginas: 62, desc: "Este livro apresenta os fundamentos da Geometria Descritiva, ferramenta gráfica para a solução de problemas geométricos no espaço, cujo objetivo é representar objetos tridimensionais em planos bidimensionais por meio de projeções ortogonais de elementos como pontos e retas. Com base em um conjunto de princípios que definem a forma e a posição desses objetos, a técnica permite a profissionais visualizar e analisar peças complexas, facilitando o processo de projeto, construção e fabricação. Segundo a experiência dos autores, o tema é de fácil leitura, mas de difícil aprendizado, e a melhor forma de dominá-lo é resolvendo exercícios.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/1078", tipoAcao: "externo", comentarios: [] },
    { id: 34, titulo: "Áreas: teoria, construções e problemas", autor: "Juan López Linares", genero: "Matemática", paginas: 95, desc: "Este livro trata do cálculo de áreas, conceito fundamental na matemática, na ciência, na engenharia, na arquitetura, na geografia e em muitas outras disciplinas. Além da Introdução, organiza-se em três capítulos: fundamentos para cálculos de áreas; construções, exercícios e desafios; e problemas de olimpíadas internacionais. Suas 54 figuras trazem links para gráficos interativos no GeoGebra e, em vários casos, para resoluções em vídeo no YouTube. O software, gratuito e disponível online e em aplicativos, permite construções dinâmicas que exploram diversas configurações de um mesmo problema. Serve tanto para verificação, como calculadora gráfica e numérica, quanto para apresentar, passo a passo, demonstrações rigorosas, convidando o leitor a interagir. O material foi utilizado no curso “Geometria Olímpica com GeoGebra”, destinado a professores de Matemática do Ensino Fundamental e Médio de todo o Brasil.", downloads: 0, avaliacaoMedia: 0.0, arquivo: "https://livrosabertos.abcd.usp.br/portaldelivrosUSP/pt_BR/catalog/book/1291", tipoAcao: "externo", comentarios: [] }
];

let usuarioLogado = null;
let topicosForum = [];

function fazerLogin() {
    const nome = document.getElementById('login-nome').value;
    const email = document.getElementById('login-email').value;
    if(nome && email) {
        usuarioLogado = { nome, email };
        document.getElementById('user-area').innerHTML = `<span>Olá, ${nome}!</span>`;
    } else {
        alert('Por favor, informe seu nome e e-mail para entrar.');
    }
}

function mudarSecao(secaoId) {
    const secoes = ['inicio', 'acervo', 'detalhes', 'em-alta', 'forum', 'contato'];
    secoes.forEach(s => {
        const el = document.getElementById(`sec-${s}`);
        if(el) el.style.display = 'none';
    });
    
    const secaoAtiva = document.getElementById(`sec-${secaoId}`);
    if(secaoAtiva) secaoAtiva.style.display = 'block';

    if(secaoId === 'acervo') filtrarCategoria('todos');
    if(secaoId === 'em-alta') renderizarEmAlta();
}

function exibirLivros(lista, titulo = "Todos os Livros do Acervo") {
    const tituloEl = document.getElementById('titulo-categoria');
    if(tituloEl) tituloEl.innerText = titulo;
    
    const grid = document.getElementById('grid-livros');
    if(!grid) return;
    grid.innerHTML = '';
    
    if(lista.length === 0) {
        grid.innerHTML = '<p>Nenhum livro encontrado nesta categoria.</p>';
        return;
    }

    lista.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Verifica se exibe "Organizador" ou "Autor"
        let responsavelTexto = livro.organizador 
            ? `<p><strong>Organizador:</strong> ${livro.organizador}</p>` 
            : `<p><strong>Autor:</strong> ${livro.autor}</p>`;

        let botaoAcao = livro.tipoAcao === 'externo' 
            ? `<a href="${livro.arquivo}" class="btn" target="_blank">Acessar no Portal</a>`
            : `<a href="${livro.arquivo}" class="btn" onclick="registrarDownload(${livro.id})" target="_blank">Ler/Baixar PDF</a>`;

        let infoDownloads = livro.tipoAcao === 'externo' 
            ? '' 
            : `<p><strong>Downloads:</strong> 📥 ${livro.downloads}</p>`;

        card.innerHTML = `
            <div>
                <span class="tag-genero">${livro.genero}</span>
                <h3 onclick="abrirDetalhes(${livro.id})" class="livro-link">${livro.titulo}</h3>
                ${responsavelTexto}
                ${infoDownloads}
                <p><strong>Avaliação:</strong> ⭐ ${livro.avaliacaoMedia} / 5</p>
            </div>
            <div class="card-acoes">
                ${botaoAcao}
                <button onclick="abrirDetalhes(${livro.id})" class="btn-detalhes">Detalhes</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filtrarCategoria(genero) {
    const secoes = ['inicio', 'detalhes', 'em-alta', 'forum', 'contato'];
    secoes.forEach(s => {
        const el = document.getElementById(`sec-${s}`);
        if(el) el.style.display = 'none';
    });
    
    const secaoAcervo = document.getElementById('sec-acervo');
    if(secaoAcervo) secaoAcervo.style.display = 'block';

    if(genero === 'todos') {
        exibirLivros(livros, "Todos os Livros do Acervo");
    } else {
        const filtrados = livros.filter(l => l.genero === genero);
        exibirLivros(filtrados, `${genero}`);
    }
}

function buscarLivros() {
    const termo = document.getElementById('input-busca').value.toLowerCase();
    const filtrados = livros.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo) ||
        l.genero.toLowerCase().includes(termo)
    );
    exibirLivros(filtrados, "Resultados da Busca");
}

function abrirDetalhes(id) {
    const livro = livros.find(l => l.id === id);
    const box = document.getElementById('detalhe-livro-conteudo');
    if(!box) return;
    
    let responsavelDetalhe = livro.organizador 
        ? `<p><strong>Organizador:</strong> ${livro.organizador}</p>` 
        : `<p><strong>Autor:</strong> ${livro.autor}</p>`;

    let botaoDetalheAcao = livro.tipoAcao === 'externo'
        ? `<a href="${livro.arquivo}" class="btn" target="_blank">🌐 Acessar Página Externa</a>`
        : `<a href="${livro.arquivo}" class="btn" onclick="registrarDownload(${livro.id})" target="_blank">📥 Ler ou Baixar PDF do Livro</a>`;

    let infoDetalheDownloads = livro.tipoAcao === 'externo' 
        ? '' 
        : `<p><strong>Downloads realizados:</strong> ${livro.downloads}</p>`;

    // Aviso em destaque caso seja do Portal da USP
    let avisoFonteUSP = livro.tipoAcao === 'externo'
        ? `<div style="background: var(--cor-papel-escuro); padding: 10px; border-left: 4px solid var(--cor-luz); margin: 15px 0; border-radius: 4px;">
               <p style="margin: 0; font-weight: 500; color: var(--cor-principal);"><strong>Fonte:</strong> Portal de Livros Abertos da USP</p>
           </div>`
        : '';

    box.innerHTML = `
        <span class="tag-genero">${livro.genero}</span>
        <h2>${livro.titulo}</h2>
        ${responsavelDetalhe}
        <p><strong>Número de Páginas:</strong> ${livro.paginas}</p>
        ${infoDetalheDownloads}
        <p><strong>Média de Avaliação:</strong> ⭐ ${livro.avaliacaoMedia} / 5</p>
        <hr style="margin: 15px 0;">
        <p><strong>Sinopse / Descrição:</strong></p>
        <p>${livro.desc}</p>
        
        ${avisoFonteUSP}

        <div style="margin: 20px 0;">
            ${botaoDetalheAcao}
        </div>

        <div class="avaliacao-box">
            <h4>Avalie este livro:</h4>
            <button onclick="avaliarLivro(${livro.id}, 5)" class="btn-pequeno">⭐⭐⭐⭐⭐ (5/5)</button>
            <button onclick="avaliarLivro(${livro.id}, 4)" class="btn-pequeno">⭐⭐⭐⭐ (4/5)</button>
            <button onclick="avaliarLivro(${livro.id}, 3)" class="btn-pequeno">⭐⭐⭐ (3/5)</button>
            <button onclick="avaliarLivro(${livro.id}, 2)" class="btn-pequeno">⭐⭐ (2/5)</button>
            <button onclick="avaliarLivro(${livro.id}, 1)" class="btn-pequeno">⭐ (1/5)</button>
        </div>

        <div class="comentarios-secao" style="margin-top: 20px;">
            <h3>💬 Comentários da Comunidade</h3>
            <div id="lista-comentarios-${livro.id}" style="margin: 15px 0;">
                ${livro.comentarios.length === 0 ? '<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>' : livro.comentarios.map(c => `<div class="comment-item"><strong>${c.usuario}:</strong><p>${c.texto}</p></div>`).join('')}
            </div>
            
            <div class="form-comentario">
                <textarea id="comentario-texto-${livro.id}" rows="7" placeholder="Escreva seu comentário sobre o livro..."></textarea>
                <button onclick="adicionarComentario(${livro.id})" class="btn" style="margin-top: 10px;">Comentar</button>
            </div>
        </div>
    `;
    mudarSecao('detalhes');
}

function registrarDownload(id) {
    const livro = livros.find(l => l.id === id);
    if(livro && livro.tipoAcao !== 'externo') {
        livro.downloads++;
    }
}

function avaliarLivro(id, nota) {
    if(!usuarioLogado) {
        alert('Faça login com seu nome e e-mail no topo da página para avaliar!');
        return;
    }
    const livro = livros.find(l => l.id === id);
    livro.avaliacaoMedia = ((Number(livro.avaliacaoMedia) + nota) / 2).toFixed(1);
    alert(`Obrigado por avaliar! Nova média do livro: ${livro.avaliacaoMedia} ⭐`);
    abrirDetalhes(id);
}

function adicionarComentario(id) {
    if(!usuarioLogado) {
        alert('Faça login no topo da página para enviar um comentário.');
        return;
    }
    const textoInput = document.getElementById(`comentario-texto-${id}`);
    if(!textoInput || textoInput.value.trim() === '') return;

    const livro = livros.find(l => l.id === id);
    livro.comentarios.push({ usuario: usuarioLogado.nome, texto: textoInput.value });
    abrirDetalhes(id);
}

function renderizarEmAlta() {
    const grid = document.getElementById('grid-em-alta');
    if(!grid) return;
    grid.innerHTML = '';
    
    const ordenados = [...livros].sort((a, b) => b.downloads - a.downloads);

    ordenados.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        let responsavelTexto = livro.organizador 
            ? `<p><strong>Organizador:</strong> ${livro.organizador}</p>` 
            : `<p><strong>Autor:</strong> ${livro.autor}</p>`;

        let botaoAcao = livro.tipoAcao === 'externo' 
            ? `<a href="${livro.arquivo}" class="btn" target="_blank">Acessar no Portal</a>`
            : `<a href="${livro.arquivo}" class="btn" onclick="registrarDownload(${livro.id})" target="_blank">Ler/Baixar PDF</a>`;

        let infoDownloads = livro.tipoAcao === 'externo' 
            ? '' 
            : `<p><strong>Downloads:</strong> 📥 ${livro.downloads}</p>`;

        card.innerHTML = `
            <div>
                <span class="tag-genero">${livro.genero}</span>
                <h3 onclick="abrirDetalhes(${livro.id})" class="livro-link" style="margin-top: 10px;">${livro.titulo}</h3>
                ${responsavelTexto}
                ${infoDownloads}
                <p>${livro.desc}</p>
            </div>
            <div class="card-acoes">
                ${botaoAcao}
                <button onclick="abrirDetalhes(${livro.id})" class="btn-detalhes">Detalhes</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function publicarTopico(e) {
    e.preventDefault();
    if(!usuarioLogado) {
        alert('Faça login no topo da página para publicar no fórum.');
        return;
    }
    const genero = document.getElementById('forum-genero').value;
    const titulo = document.getElementById('forum-titulo').value;
    const texto = document.getElementById('forum-texto').value;

    topicosForum.unshift({ usuario: usuarioLogado.nome, genero, titulo, texto });
    
    document.getElementById('forum-titulo').value = '';
    document.getElementById('forum-texto').value = '';
    renderizarForum();
    alert('Tópico publicado com sucesso no fórum!');
}

function renderizarForum() {
    const lista = document.getElementById('lista-topicos');
    if(!lista) return;
    lista.innerHTML = '';

    if(topicosForum.length === 0) {
        lista.innerHTML = '<p>Nenhum tópico publicado ainda. Seja o primeiro a iniciar um debate!</p>';
        return;
    }

    topicosForum.forEach(topico => {
        const item = document.createElement('div');
        item.classList.add('comment-item');
        item.innerHTML = `
            <span class="tag-genero">${topico.genero}</span>
            <h4 style="margin-top: 5px;">${topico.titulo}</h4>
            <p>${topico.texto}</p>
            <small style="color: var(--cor-texto-suave);">Postado por: <strong>${topico.usuario}</strong></small>
        `;
        lista.appendChild(item);
    });
}

// Ao carregar o site,abre na página inicial
window.onload = () => {
    mudarSecao('inicio');
};
