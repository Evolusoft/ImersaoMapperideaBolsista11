<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1638356984164" ID="ID_1239255503" MODIFIED="1638357078566" TEXT="io.mapperidea.earlyadopter">
<icon BUILTIN="Package"/>
<node CREATED="1638361091427" ID="ID_1068075229" MODIFIED="1638361093654" POSITION="right" TEXT="config">
<node CREATED="1660918539233" ID="ID_1089475640" LINK="mapperidea.mm" MODIFIED="1660918864850" TEXT="mapperidea"/>
</node>
<node CREATED="1638358138324" ID="ID_1569754601" MODIFIED="1638358143848" POSITION="right" TEXT="conven&#xe7;&#xe3;o">
<node CREATED="1638358901325" FOLDED="true" ID="ID_1215634553" MODIFIED="1638358904369" TEXT="atalhos icones">
<node CREATED="1638358909356" LINK="https://docs.mapperidea.io/ref-guide/en/functions/miscellaneous/tips/tips.html" MODIFIED="1638358909356" TEXT="https://docs.mapperidea.io/ref-guide/en/functions/miscellaneous/tips/tips.html"/>
</node>
<node CREATED="1638358473674" ID="ID_1010858111" MODIFIED="1638358476822" TEXT="uso de palavras">
<node CREATED="1638533769469" ID="ID_728609545" MODIFIED="1638533777424" TEXT="Todo nome de classe deve usar CamelCase"/>
<node CREATED="1638533779261" ID="ID_1838904025" MODIFIED="1638533788537" TEXT="Todo nome de atributo de usar camelCase"/>
<node CREATED="1638358477602" ID="ID_906816074" MODIFIED="1638358482701" TEXT="Sempre em portugu&#xea;s"/>
</node>
<node CREATED="1638358145948" ID="ID_1570712554" MODIFIED="1661361072417" TEXT="// uso dos icones">
<node CREATED="1638358150372" ID="ID_1838909999" MODIFIED="1638358154409" TEXT="">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1638358177628" ID="ID_1717769022" MODIFIED="1638358190752" TEXT="Usado quando um dominio deve ser persistido no sistema"/>
</node>
<node CREATED="1638358212906" ID="ID_1088933321" MODIFIED="1638358218138" TEXT="">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1638358219395" ID="ID_1915374519" MODIFIED="1638358248214" TEXT="Usado para dominio de neg&#xf3;cio n&#xe3;o for persistido ou agregado a um dominio principal"/>
</node>
</node>
</node>
<node CREATED="1638357114382" ID="ID_93707434" MODIFIED="1638357119123" POSITION="right" TEXT="requisitos">
<node CREATED="1638357179445" ID="ID_634126882" MODIFIED="1638357185265" TEXT="defini&#xe7;&#xe3;o do sistema">
<node CREATED="1638357186013" ID="ID_873501592" MODIFIED="1638357192617" TEXT="Controle de s&#xf3;cios de um clube"/>
</node>
<node CREATED="1588946968775" ID="ID_541800964" MODIFIED="1638357207809" TEXT="1. Cadastro de S&#xf3;cios">
<node CREATED="1588946976742" ID="ID_1605250756" MODIFIED="1588946982378" TEXT="Quem?">
<node CREATED="1588946983246" ID="ID_299919516" MODIFIED="1638357236320" TEXT="Secret&#xe1;ria"/>
</node>
<node CREATED="1588947019325" ID="ID_1804887249" MODIFIED="1588947021769" TEXT="Por que?">
<node CREATED="1588947023789" ID="ID_1078282187" MODIFIED="1638357247792" TEXT="Para poder incluir s&#xf3;cios no clube"/>
</node>
<node CREATED="1588947002166" ID="ID_1584222737" MODIFIED="1588947007649" TEXT="O que?">
<node CREATED="1588947008989" ID="ID_655144446" MODIFIED="1638357267759" TEXT="Preencher as informa&#xe7;&#xf5;es da pessoa f&#xed;sica titular"/>
</node>
<node CREATED="1588947055739" ID="ID_1236583801" MODIFIED="1588947059175" TEXT="Cen&#xe1;rios">
<node CREATED="1588947087458" ID="ID_1376307476" MODIFIED="1638357294134" TEXT="1.1 Acesso ao Cadastro de S&#xf3;cios">
<node CREATED="1588947151344" ID="ID_593323676" MODIFIED="1638357316117" TEXT="Dado que a Secret&#xe1;ria esteja logado no sistema"/>
<node CREATED="1588947168063" ID="ID_288409867" MODIFIED="1638357322597" TEXT="Quando acessa o Cadastro de S&#xf3;cios"/>
<node CREATED="1588947177095" ID="ID_1430639780" MODIFIED="1588947193099" TEXT="Ent&#xe3;o &#xe9; exibido os dados a serem preenchidos."/>
</node>
</node>
</node>
</node>
<node CREATED="1638531638089" ID="ID_1567313604" MODIFIED="1638531649252" POSITION="right" TEXT="infra">
<icon BUILTIN="Package"/>
<node CREATED="1638531652440" ID="ID_1185466020" MODIFIED="1638531656646" TEXT="security">
<icon BUILTIN="Package"/>
<node CREATED="1638531659609" ID="ID_742717652" MODIFIED="1638531670232" TEXT="Cors">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1638531675623" ID="ID_792009061" MODIFIED="1638531681188" TEXT="@">
<node CREATED="1638531684103" ID="ID_1849770264" MODIFIED="1638531703549" TEXT="permitedOrigins">
<icon BUILTIN="element"/>
<node CREATED="1638531834562" ID="ID_285049199" MODIFIED="1638531843438" TEXT="development">
<icon BUILTIN="element"/>
<node CREATED="1638531725670" ID="ID_1031305589" MODIFIED="1638531728572" TEXT="http://localhost:8081">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1638531764741" ID="ID_747980756" MODIFIED="1638531776347" TEXT="https://localhost:9443">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638531827282" ID="ID_611955864" MODIFIED="1638531843437" TEXT="staging">
<icon BUILTIN="element"/>
<node CREATED="1638531780155" ID="ID_1345452048" MODIFIED="1638531861740" TEXT="https://clube.staging.mapperidea.io">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638531830106" ID="ID_398254530" MODIFIED="1638531843436" TEXT="production">
<icon BUILTIN="element"/>
<node CREATED="1638531780155" ID="ID_449519682" MODIFIED="1638531798313" TEXT="https://clube.mapperidea.io">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638357403126" ID="ID_1653047089" MODIFIED="1638357408715" POSITION="right" TEXT="domain">
<icon BUILTIN="Package"/>
<node CREATED="1638357472205" ID="ID_1907768757" MODIFIED="1661863896962" TEXT="pessoas">
<icon BUILTIN="Package"/>
<node CREATED="1638357832650" ID="ID_896364472" MODIFIED="1638358273308" TEXT="Pessoa">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" ID="ID_1456537448" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" ID="ID_408557130" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_69147662" MODIFIED="1661863960602" TEXT="Pessoas">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638358309472" ID="ID_857359159" MODIFIED="1638358314932" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053074581" ID="ID_1564709098" MODIFIED="1662053155214" TEXT="documento: DocumentoIdentificacao()">
<icon BUILTIN="Mapping.composite"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1638358371838" ID="ID_400018100" MODIFIED="1638358783174" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638360960495" ID="ID_1390390495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" ID="ID_1341905329" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358377573" ID="ID_996411907" MODIFIED="1638359083092" TEXT="endereco: Endereco()">
<icon BUILTIN="Mapping.composite"/>
<node CREATED="1638360934792" ID="ID_1216847953" MODIFIED="1638360935964" TEXT="@">
<node CREATED="1638360936984" ID="ID_1918754834" MODIFIED="1638360941398" TEXT="titulo">
<icon BUILTIN="element"/>
<node CREATED="1638360942896" ID="ID_1584492807" MODIFIED="1638360946503" TEXT="Endere&#xe7;o">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638360963167" ID="ID_925323334" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358381893" ID="ID_1445795266" MODIFIED="1638360250706" TEXT="dataNascimento: Data()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1638358391797" ID="ID_737059406" MODIFIED="1638360561307" TEXT="familia: MembroFamilia()">
<icon BUILTIN="Mapping.oneToMany"/>
</node>
</node>
</node>
<node CREATED="1662053281269" ID="ID_1944586845" MODIFIED="1662053489281" TEXT="DocumentoIdentificacao">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662053290732" ID="ID_4709776" MODIFIED="1662053494617" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053297136" ID="ID_1694282875" MODIFIED="1662053504731" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1662053330292" ID="ID_1599878246" MODIFIED="1662053507248" TEXT="tipo: Texto(16)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1662053353621" ID="ID_1005291197" MODIFIED="1662053356074" TEXT="@">
<node CREATED="1662053356074" ID="ID_117304258" MODIFIED="1662053417225" TEXT="values">
<icon BUILTIN="element"/>
<node CREATED="1662053393752" ID="ID_107348869" MODIFIED="1662053412060" TEXT="RG">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662053397554" ID="ID_559926820" MODIFIED="1662053412061" TEXT="CPF">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638360303140" ID="ID_1415365472" MODIFIED="1662053461326" TEXT="MembroFamilia">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1638360563703" ID="ID_427298101" MODIFIED="1638360569388" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638360573334" ID="ID_532572020" MODIFIED="1638360582574" TEXT="pessoa: Pessoa()">
<icon BUILTIN="Mapping.manyToOne"/>
</node>
<node CREATED="1638360586134" ID="ID_1261779872" MODIFIED="1638360750660" TEXT="tipo: TipoMembroFamilia()">
<icon BUILTIN="Mapping.oneToOne"/>
</node>
<node CREATED="1638360597878" ID="ID_1063483218" MODIFIED="1638360614436" TEXT="membro: Pessoa()">
<icon BUILTIN="Mapping.oneToOne"/>
</node>
</node>
</node>
<node CREATED="1638360309716" ID="ID_995978239" MODIFIED="1638360432772" TEXT="TipoMembroFamilia">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1638360322243" ID="ID_1516520294" MODIFIED="1638360339111" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638360324867" ID="ID_1069063397" MODIFIED="1638360341160" TEXT="nome: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
<node CREATED="1638360343306" ID="ID_844169944" MODIFIED="1638360435115" TEXT="instancias">
<icon BUILTIN="element"/>
<node CREATED="1638360347826" ID="ID_1708202012" MODIFIED="1638360439140" TEXT="pai">
<icon BUILTIN="element"/>
<node CREATED="1638360380191" ID="ID_772961927" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360383232" ID="ID_1507832468" MODIFIED="1638360445917" TEXT="Pai">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360349441" ID="ID_1414384748" MODIFIED="1638360439140" TEXT="mae">
<icon BUILTIN="element"/>
<node CREATED="1638360386888" ID="ID_1496381121" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360389239" ID="ID_1630382090" MODIFIED="1638360445917" TEXT="M&#xe3;e">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360351002" ID="ID_1903116446" MODIFIED="1638360439140" TEXT="avos">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" ID="ID_1734956303" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" ID="ID_961468314" MODIFIED="1638360459511" TEXT="Av&#xf3;s">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360352346" ID="ID_1399851423" MODIFIED="1638360439140" TEXT="filho">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" ID="ID_1982028056" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" ID="ID_404436216" MODIFIED="1638360466519" TEXT="Filho">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360367200" ID="ID_592109340" MODIFIED="1638360439139" TEXT="dependente">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" ID="ID_1363146544" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" ID="ID_725772017" MODIFIED="1638360475447" TEXT="Dependente">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638359025738" ID="ID_1601278786" MODIFIED="1638359046009" TEXT="Endereco">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662395454750" ID="ID_1922140848" MODIFIED="1662395457214" TEXT="@">
<node CREATED="1662395457216" ID="ID_1067502523" MODIFIED="1662395504936" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1662395486969" ID="ID_307102697" MODIFIED="1662395520743" TEXT="Enderecos">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359109183" ID="ID_134804064" MODIFIED="1638359112021" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638358994875" ID="ID_1539554431" MODIFIED="1638360197146" TEXT="uf: UnidadeFederativa()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" ID="ID_537572373" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" ID="ID_431342785" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358992435" ID="ID_536850839" MODIFIED="1638359724030" TEXT="cidade: Cidade()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" ID="ID_1485153771" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" ID="ID_36095297" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359000986" ID="ID_1472776476" MODIFIED="1638359724031" TEXT="bairro: Bairro()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" ID="ID_241369510" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" ID="ID_79010545" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358931220" ID="ID_195649463" MODIFIED="1638359239972" TEXT="logradouro: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638360960495" ID="ID_458892326" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" ID="ID_1706201249" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358986731" ID="ID_1685067123" MODIFIED="1638359239972" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638359167366" ID="ID_1548524593" MODIFIED="1638359171034" TEXT="@">
<node CREATED="1638359173270" ID="ID_594620967" MODIFIED="1638359178356" TEXT="comentario">
<icon BUILTIN="element"/>
<node CREATED="1638359181222" ID="ID_1000915010" MODIFIED="1638359230699" TEXT="Pode ser usado n&#xfa;meros inteiros ou indica&#xe7;&#xe3;o de letras, por exemplo 338A">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638360963167" ID="ID_879127420" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1662140894193" ID="ID_637521964" MODIFIED="1662140911743" TEXT="complemento: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1662396201879" ID="ID_1813311304" MODIFIED="1662396262361" TEXT="pontoReferencia: PontoReferencia()">
<icon BUILTIN="Mapping.composite"/>
</node>
</node>
</node>
<node CREATED="1662396051098" ID="ID_1979243902" MODIFIED="1662396120268" TEXT="PontoReferencia">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662053290732" ID="ID_834263460" MODIFIED="1662053494617" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053330292" ID="ID_1436410061" MODIFIED="1662053507248" TEXT="tipo: Texto(16)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1662053353621" ID="ID_385611161" MODIFIED="1662053356074" TEXT="@">
<node CREATED="1662053356074" ID="ID_1069444945" MODIFIED="1662053417225" TEXT="values">
<icon BUILTIN="element"/>
<node CREATED="1662053393752" ID="ID_1626622289" MODIFIED="1662396139621" TEXT="POSTO">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662053397554" ID="ID_1441148431" MODIFIED="1662396150296" TEXT="SUPERMERCADO">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662396164425" ID="ID_1105983315" MODIFIED="1662396172204" TEXT="FARMACIA">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
<node CREATED="1662053297136" ID="ID_830745436" MODIFIED="1662053504731" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
</node>
<node CREATED="1638357465100" ID="ID_899210838" MODIFIED="1638357470369" TEXT="geo">
<icon BUILTIN="Package"/>
<node CREATED="1661870016622" ID="ID_334576307" MODIFIED="1661870046741" TEXT="Pais">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661870132308" ID="ID_456397917" MODIFIED="1661870198746" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661870135742" ID="ID_916748117" MODIFIED="1661870209161" TEXT="sigla: Texto (2)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661870155334" ID="ID_1675622310" MODIFIED="1661870209161" TEXT="nome: Texto (64)">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
<node CREATED="1638359286443" ID="ID_182322174" MODIFIED="1638359314865" TEXT="UnidadeFederativa">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" ID="ID_1734720958" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" ID="ID_1354551409" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_1547324001" MODIFIED="1661864184469" TEXT="estados">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1661864196197" ID="ID_1171632958" MODIFIED="1661864213043" TEXT="descricao">
<icon BUILTIN="element"/>
<node CREATED="1661864215829" ID="ID_942683942" MODIFIED="1661864246280" TEXT="Unidade Federativa ou provincia">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359344018" ID="ID_220192731" MODIFIED="1638359372952" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638359346802" ID="ID_1478204351" MODIFIED="1638359366575" TEXT="sigla: Texto(2)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879008714" ID="ID_1740335989" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" ID="ID_1593797737" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359349930" ID="ID_1315939" MODIFIED="1638359366575" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879008714" ID="ID_1388363377" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" ID="ID_924991386" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638359284027" ID="ID_152387908" MODIFIED="1638359314864" TEXT="Cidade">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1638359378201" ID="ID_1894335411" MODIFIED="1638359380823" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661863917176" ID="ID_614792173" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" ID="ID_1518917824" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_1873196324" MODIFIED="1661864287246" TEXT="cidades">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359381521" ID="ID_147572066" MODIFIED="1638359426462" TEXT="codigo: Numero()">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879008714" ID="ID_1862910383" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" ID="ID_34953464" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359396953" ID="ID_1270566251" MODIFIED="1638359426462" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879021246" ID="ID_481754391" MODIFIED="1661879023078" TEXT="@">
<node CREATED="1661879023080" ID="ID_972036438" MODIFIED="1661879058258" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359404490" ID="ID_1377184327" MODIFIED="1638359446316" TEXT="uf: UnidadeFederativa()">
<icon BUILTIN="Mapping.oneToOne"/>
</node>
<node CREATED="1638359530287" ID="ID_68447090" MODIFIED="1638359538822" TEXT="bairros: Bairro()">
<icon BUILTIN="Mapping.oneToMany"/>
</node>
</node>
</node>
<node CREATED="1638359301163" ID="ID_623933830" MODIFIED="1638359314864" TEXT="Bairro">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" ID="ID_936019327" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" ID="ID_1465533412" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_985591185" MODIFIED="1661864161746" TEXT="bairros">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359547222" ID="ID_1857477363" MODIFIED="1638359552250" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638359585940" ID="ID_1813642455" MODIFIED="1638359654899" TEXT="cidade: Cidade()">
<icon BUILTIN="Mapping.manyToOne"/>
</node>
<node CREATED="1638359554245" ID="ID_1243393651" MODIFIED="1638359617098" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1638359564925" ID="ID_649341744" MODIFIED="1638359617097" TEXT="cepPadrao: Numero(8)">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
</node>
<node CREATED="1638357498339" ID="ID_888037985" MODIFIED="1638357503250" TEXT="servicos">
<icon BUILTIN="Package"/>
<node CREATED="1638357710437" ID="ID_1118246126" MODIFIED="1638357712753" TEXT="@">
<node CREATED="1638357719046" ID="ID_629225797" MODIFIED="1638357727268" TEXT="titulo">
<icon BUILTIN="element"/>
<node CREATED="1638357728006" ID="ID_1918122776" MODIFIED="1638357732299" TEXT="Servi&#xe7;os">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
<node CREATED="1661017582824" ID="ID_1553933865" MODIFIED="1661017594121" TEXT="tutorial">
<icon BUILTIN="Package"/>
<node CREATED="1661017594402" ID="ID_646141932" MODIFIED="1661017771294" TEXT="Tutorial">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661146080130" ID="ID_121892574" MODIFIED="1661146490910" TEXT="@">
<node CREATED="1661146088577" ID="ID_961058322" MODIFIED="1661146092782" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661146094953" ID="ID_1676229821" MODIFIED="1661146514487" TEXT="tutorials">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1661017772157" ID="ID_1105717172" MODIFIED="1661017779570" TEXT="@">
<node CREATED="1661017780561" ID="ID_1276311592" MODIFIED="1661017788878" TEXT="sqlLegado">
<icon BUILTIN="element"/>
<node CREATED="1661017790687" ID="ID_633414546" MODIFIED="1661017936973" TEXT="select t1.*&#xa;from table1 t1&#xa;where t1.flagged = 0&#xa;union all&#xa;select t1.*&#xa;from table1 t1&#xa;where t1.flagged = 1 and&#xa;      not exists (select 1&#xa;                  from table1 tt1&#xa;                  where tt1.account = t1.account and tt1.flagged = 0&#xa;                 );">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1661017622530" ID="ID_1039467787" MODIFIED="1661017631582" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661017635649" ID="ID_1397487939" MODIFIED="1661017647125" TEXT="title: Texto()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661017649358" ID="ID_1117754723" MODIFIED="1661017659591" TEXT="description: Texto()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661017660146" ID="ID_1878322951" MODIFIED="1661017673005" TEXT="published: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
<node CREATED="1661017984260" ID="ID_807636367" MODIFIED="1661360638623" TEXT="metodos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661017990135" ID="ID_1979660759" MODIFIED="1661018031118" TEXT="nomesContasAtivas">
<icon BUILTIN="Method.public"/>
<node CREATED="1661018043619" ID="ID_1479279209" MODIFIED="1661018045721" TEXT="body">
<node CREATED="1661018233839" ID="ID_136742890" MODIFIED="1661018238794" TEXT="QUERY()">
<node CREATED="1661018320092" ID="ID_776048793" MODIFIED="1661018325002" TEXT="SELECT">
<node CREATED="1661018243169" ID="ID_668807957" MODIFIED="1661018254859" TEXT="COLUMNS">
<node CREATED="1661018257543" ID="ID_36991223" MODIFIED="1661018272030" TEXT="t1.*"/>
</node>
<node CREATED="1661018275952" ID="ID_816100287" MODIFIED="1661018292272" TEXT="FROM">
<node CREATED="1661018277998" ID="ID_36078259" MODIFIED="1661018286395" TEXT="t1">
<node CREATED="1661018293856" ID="ID_584448310" MODIFIED="1661124180799" TEXT="table1"/>
</node>
</node>
<node CREATED="1661018343652" ID="ID_1458480095" MODIFIED="1661018346799" TEXT="WHERE">
<node CREATED="1661018347224" ID="ID_782335331" MODIFIED="1661018351050" TEXT="=">
<node CREATED="1661018382895" ID="ID_137684622" MODIFIED="1661018419308" TEXT="t1.flagged"/>
<node CREATED="1661018392613" ID="ID_1257481636" MODIFIED="1661018397729" TEXT="o"/>
</node>
</node>
</node>
<node CREATED="1661018445088" ID="ID_444702393" MODIFIED="1661018453912" TEXT="UNION ALL"/>
<node CREATED="1661018320092" ID="ID_1102138119" MODIFIED="1661018325002" TEXT="SELECT">
<node CREATED="1661018243169" ID="ID_221704923" MODIFIED="1661018254859" TEXT="COLUMNS">
<node CREATED="1661018257543" ID="ID_823958939" MODIFIED="1661018272030" TEXT="t1.*"/>
</node>
<node CREATED="1661018275952" ID="ID_244081570" MODIFIED="1661018292272" TEXT="FROM">
<node CREATED="1661018277998" ID="ID_683938940" MODIFIED="1661018286395" TEXT="t1">
<node CREATED="1661018293856" ID="ID_1371917322" MODIFIED="1661018298964" TEXT="table1"/>
</node>
</node>
<node CREATED="1661018343652" ID="ID_130847866" MODIFIED="1661018346799" TEXT="WHERE">
<node CREATED="1661018502124" ID="ID_1243528651" MODIFIED="1661018504928" TEXT="and">
<node CREATED="1661018347224" ID="ID_1763386640" MODIFIED="1661018351050" TEXT="=">
<node CREATED="1661018382895" ID="ID_1007890777" MODIFIED="1661018421678" TEXT="t1.flagged"/>
<node CREATED="1661018392613" ID="ID_1509858323" MODIFIED="1661018493413" TEXT="1"/>
</node>
<node CREATED="1661018509486" ID="ID_1779604385" MODIFIED="1661018519353" TEXT="notExists()">
<node CREATED="1661018539251" ID="ID_912972476" MODIFIED="1661018543935" TEXT="QUERY()">
<node CREATED="1661019109655" ID="ID_858065239" MODIFIED="1661019112729" TEXT="SELECT">
<node CREATED="1661019114981" ID="ID_181854338" MODIFIED="1661019134046" TEXT="COLUMNS">
<node CREATED="1661019163631" ID="ID_153658119" MODIFIED="1661019224914" TEXT="1"/>
</node>
<node CREATED="1661019122421" ID="ID_543744081" MODIFIED="1661019124009" TEXT="FROM">
<node CREATED="1661019176198" ID="ID_1828287466" MODIFIED="1661019177832" TEXT="tt1">
<node CREATED="1661019179471" ID="ID_1707751869" MODIFIED="1661019182733" TEXT="table1"/>
</node>
</node>
<node CREATED="1661019125280" ID="ID_1518942898" MODIFIED="1661019127050" TEXT="WHERE">
<node CREATED="1661019303062" ID="ID_1193796923" MODIFIED="1661124242900" TEXT="and">
<node CREATED="1661019187782" ID="ID_1320213402" MODIFIED="1661019190685" TEXT="=">
<node CREATED="1661019192837" ID="ID_1932327524" MODIFIED="1661019277845" TEXT="tt1.account"/>
<node CREATED="1661019208615" ID="ID_1830719225" MODIFIED="1661019286090" TEXT="t1.account"/>
</node>
<node CREATED="1661019317018" ID="ID_1848542234" MODIFIED="1661019319422" TEXT="=">
<node CREATED="1661019320186" ID="ID_1769759423" MODIFIED="1661019333277" TEXT="t1.flagged"/>
<node CREATED="1661019334629" ID="ID_157415371" MODIFIED="1661019335866" TEXT="0"/>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1661018211047" ID="ID_913980233" MODIFIED="1661018213593" TEXT="onCreate"/>
</node>
</node>
</node>
</node>
</node>
</map>
