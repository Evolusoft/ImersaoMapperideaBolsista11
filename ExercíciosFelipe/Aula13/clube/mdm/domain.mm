<map version="1.0.1">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1638357403126" ID="ID_115056098" LINK="io.mapperidea.earlyadopter.mm" MODIFIED="1664471013285" TEXT="domain">
<icon BUILTIN="Package"/>
<node CREATED="1638357472205" FOLDED="true" MODIFIED="1664470183528" POSITION="right" TEXT="pessoas">
<icon BUILTIN="Package"/>
<node CREATED="1638357832650" MODIFIED="1638358273308" TEXT="Pessoa">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" MODIFIED="1661863960602" TEXT="Pessoas">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1662577419366" MODIFIED="1662577433532" TEXT="searchable">
<icon BUILTIN="element"/>
<node CREATED="1662577480802" MODIFIED="1662577503700" TEXT="documento">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662577487040" MODIFIED="1662577503701" TEXT="nome">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638358309472" MODIFIED="1638358314932" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053074581" MODIFIED="1662053155214" TEXT="documento: DocumentoIdentificacao()">
<icon BUILTIN="Mapping.composite"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1638358371838" MODIFIED="1638358783174" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638360960495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358377573" MODIFIED="1638359083092" TEXT="endereco: Endereco()">
<icon BUILTIN="Mapping.composite"/>
<node CREATED="1638360934792" MODIFIED="1638360935964" TEXT="@">
<node CREATED="1638360936984" MODIFIED="1638360941398" TEXT="titulo">
<icon BUILTIN="element"/>
<node CREATED="1638360942896" MODIFIED="1638360946503" TEXT="Endere&#xe7;o">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1664384325694" MODIFIED="1664384336821" TEXT="ativo: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1638358381893" MODIFIED="1638360250706" TEXT="dataNascimento: Data()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1638358391797" MODIFIED="1638360561307" TEXT="familia: MembroFamilia()">
<icon BUILTIN="Mapping.oneToMany"/>
</node>
</node>
</node>
<node CREATED="1662053281269" MODIFIED="1662053489281" TEXT="DocumentoIdentificacao">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662053290732" MODIFIED="1662053494617" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053297136" MODIFIED="1662053504731" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1662053330292" MODIFIED="1662053507248" TEXT="tipo: Texto(16)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1662053353621" MODIFIED="1662053356074" TEXT="@">
<node CREATED="1662053356074" MODIFIED="1662053417225" TEXT="values">
<icon BUILTIN="element"/>
<node CREATED="1662053393752" MODIFIED="1662053412060" TEXT="RG">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662053397554" MODIFIED="1662053412061" TEXT="CPF">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638360303140" MODIFIED="1662053461326" TEXT="MembroFamilia">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1638360563703" MODIFIED="1638360569388" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638360573334" MODIFIED="1638360582574" TEXT="pessoa: Pessoa()">
<icon BUILTIN="Mapping.manyToOne"/>
</node>
<node CREATED="1638360586134" MODIFIED="1638360750660" TEXT="tipo: TipoMembroFamilia()">
<icon BUILTIN="Mapping.oneToOne"/>
</node>
<node CREATED="1638360597878" MODIFIED="1638360614436" TEXT="membro: Pessoa()">
<icon BUILTIN="Mapping.oneToOne"/>
</node>
</node>
</node>
<node CREATED="1638360309716" MODIFIED="1638360432772" TEXT="TipoMembroFamilia">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1638360322243" MODIFIED="1638360339111" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638360324867" MODIFIED="1662577547070" TEXT="nome: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
<icon BUILTIN="bullet_key"/>
</node>
</node>
<node CREATED="1638360343306" MODIFIED="1638360435115" TEXT="instancias">
<icon BUILTIN="element"/>
<node CREATED="1638360347826" MODIFIED="1638360439140" TEXT="pai">
<icon BUILTIN="element"/>
<node CREATED="1638360380191" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360383232" MODIFIED="1638360445917" TEXT="Pai">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360349441" MODIFIED="1638360439140" TEXT="mae">
<icon BUILTIN="element"/>
<node CREATED="1638360386888" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360389239" MODIFIED="1638360445917" TEXT="M&#xe3;e">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360351002" MODIFIED="1638360439140" TEXT="avos">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" MODIFIED="1638360459511" TEXT="Av&#xf3;s">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360352346" MODIFIED="1638360439140" TEXT="filho">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" MODIFIED="1638360466519" TEXT="Filho">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638360367200" MODIFIED="1638360439139" TEXT="dependente">
<icon BUILTIN="element"/>
<node CREATED="1638360392991" MODIFIED="1638360443475" TEXT="nome">
<icon BUILTIN="element"/>
<node CREATED="1638360395463" MODIFIED="1638360475447" TEXT="Dependente">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
</node>
<node CREATED="1638359025738" MODIFIED="1638359046009" TEXT="Endereco">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662395454750" MODIFIED="1662395457214" TEXT="@">
<node CREATED="1662395457216" MODIFIED="1662395504936" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1662395486969" MODIFIED="1662395520743" TEXT="Enderecos">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359109183" MODIFIED="1638359112021" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638358994875" MODIFIED="1638360197146" TEXT="uf: UnidadeFederativa()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358992435" MODIFIED="1638359724030" TEXT="cidade: Cidade()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359000986" MODIFIED="1638359724031" TEXT="bairro: Bairro()">
<icon BUILTIN="Mapping.oneToOne"/>
<node CREATED="1638360960495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358931220" MODIFIED="1638359239972" TEXT="logradouro: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638360960495" MODIFIED="1638360961211" TEXT="@">
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638358986731" MODIFIED="1638359239972" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1638359167366" MODIFIED="1638359171034" TEXT="@">
<node CREATED="1638359173270" MODIFIED="1638359178356" TEXT="comentario">
<icon BUILTIN="element"/>
<node CREATED="1638359181222" MODIFIED="1638359230699" TEXT="Pode ser usado n&#xfa;meros inteiros ou indica&#xe7;&#xe3;o de letras, por exemplo 338A">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1638360963167" MODIFIED="1638360969829" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1662140894193" MODIFIED="1662140911743" TEXT="complemento: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1662396201879" MODIFIED="1662396262361" TEXT="pontoReferencia: PontoReferencia()">
<icon BUILTIN="Mapping.composite"/>
</node>
</node>
</node>
<node CREATED="1662396051098" MODIFIED="1662396120268" TEXT="PontoReferencia">
<icon BUILTIN="Descriptor.class"/>
<node CREATED="1662053290732" MODIFIED="1662053494617" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1662053330292" MODIFIED="1662053507248" TEXT="tipo: Texto(16)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1662053353621" MODIFIED="1662053356074" TEXT="@">
<node CREATED="1662053356074" MODIFIED="1662053417225" TEXT="values">
<icon BUILTIN="element"/>
<node CREATED="1662053393752" MODIFIED="1662396139621" TEXT="POSTO">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662053397554" MODIFIED="1662396150296" TEXT="SUPERMERCADO">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662396164425" MODIFIED="1662396172204" TEXT="FARMACIA">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
<node CREATED="1662053297136" MODIFIED="1662053504731" TEXT="numero: Texto(32)">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
</node>
<node CREATED="1638357465100" MODIFIED="1664470919053" POSITION="right" TEXT="geo">
<icon BUILTIN="Package"/>
<node CREATED="1661870016622" ID="ID_639016455" MODIFIED="1661870046741" TEXT="Pais">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1664470937880" ID="ID_1179944122" MODIFIED="1664470941804" TEXT="@">
<node CREATED="1664470941805" ID="ID_1930599371" MODIFIED="1664470968527" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1664470945351" MODIFIED="1664470973104" TEXT="paises">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1664802139399" ID="ID_794523794" MODIFIED="1664891210480" TEXT="searchable">
<icon BUILTIN="element"/>
<node CREATED="1664802144912" ID="ID_813912031" MODIFIED="1664802151830" TEXT="sigla">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1664802146496" ID="ID_835513349" MODIFIED="1664802151830" TEXT="nome">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1661870132308" ID="ID_985310811" MODIFIED="1661870198746" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661870135742" ID="ID_984272996" MODIFIED="1661870209161" TEXT="sigla: Texto (2)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1664804384005" ID="ID_125835175" MODIFIED="1664804426899" TEXT="codigo: Numero(3)">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661870155334" ID="ID_1551404454" MODIFIED="1661870209161" TEXT="nome: Texto (64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1664802196248" ID="ID_1784838408" MODIFIED="1664802198020" TEXT="@">
<node CREATED="1664802198021" ID="ID_2487584" MODIFIED="1664802211743" TEXT="label">
<icon BUILTIN="element"/>
<node CREATED="1664802218216" ID="ID_1973609308" MODIFIED="1664802222419" TEXT="Nome do Pais">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1664802206112" ID="ID_1084828176" MODIFIED="1664802209659" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1664802308527" ID="ID_1273454529" MODIFIED="1664802324486" TEXT="ativo: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
<node CREATED="1664554892801" ID="ID_1508003729" MODIFIED="1664554898277" TEXT="metodos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1664554915331" ID="ID_1944467396" MODIFIED="1664554956466" TEXT="salvaDescricaoFTS">
<icon BUILTIN="Method.public"/>
<node CREATED="1664555148500" ID="ID_602025514" MODIFIED="1664555163228" TEXT="@">
<node CREATED="1664555163229" ID="ID_718398750" MODIFIED="1664555169090" TEXT="controller">
<icon BUILTIN="element"/>
</node>
</node>
<node CREATED="1664554967580" ID="ID_1331718760" MODIFIED="1664554969262" TEXT="body">
<node CREATED="1664554981341" ID="ID_848861546" MODIFIED="1664554982730" TEXT="vars">
<node CREATED="1664554982731" ID="ID_1604644721" MODIFIED="1664555012261" TEXT="fts: Texto()"/>
</node>
<node CREATED="1664555014665" ID="ID_45087529" MODIFIED="1664555029386" TEXT="fts">
<node CREATED="1664555029387" ID="ID_470262876" MODIFIED="1664555033946" TEXT="=">
<node CREATED="1664555033947" ID="ID_1482453663" MODIFIED="1664555037513" TEXT="+">
<node CREATED="1664555037514" ID="ID_347638842" MODIFIED="1664555053698" TEXT="sigla"/>
<node CREATED="1664555054973" ID="ID_300640234" MODIFIED="1664555056870" TEXT="&quot; &quot;"/>
<node CREATED="1664555063278" ID="ID_356321304" MODIFIED="1664555064215" TEXT="nome"/>
</node>
</node>
</node>
<node CREATED="1664555079291" ID="ID_829152602" MODIFIED="1664555103618" TEXT="ftsServiceAdd(self,fts)"/>
</node>
</node>
</node>
</node>
<node CREATED="1638359286443" MODIFIED="1638359314865" TEXT="UnidadeFederativa">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_773876564" MODIFIED="1664890588849" TEXT="UnidadesFederativa">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1661864196197" MODIFIED="1661864213043" TEXT="descricao">
<icon BUILTIN="element"/>
<node CREATED="1661864215829" MODIFIED="1661864246280" TEXT="Unidade Federativa ou provincia">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359344018" ID="ID_245251825" MODIFIED="1638359372952" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1664804569912" ID="ID_941522910" MODIFIED="1664804624319" TEXT="pais: Pais()">
<icon BUILTIN="Mapping.oneToOne"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1664804384005" FOLDED="true" ID="ID_1819183522" MODIFIED="1664804856288" TEXT="codigo: Numero(2)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1664804502422" ID="ID_974525196" MODIFIED="1664804505577" TEXT="@">
<node CREATED="1664804505578" ID="ID_1485665563" MODIFIED="1664804515508" TEXT="label">
<icon BUILTIN="element"/>
<node CREATED="1664804507761" ID="ID_469994187" MODIFIED="1664804517973" TEXT="C&#xf3;digo">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
<node CREATED="1638359346802" ID="ID_1393261424" MODIFIED="1664804637903" TEXT="sigla: Texto(2)">
<icon BUILTIN="Mapping.directToField"/>
<icon BUILTIN="bullet_key"/>
<node CREATED="1661879008714" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359349930" ID="ID_1682927092" MODIFIED="1638359366575" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879008714" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1664804652545" ID="ID_1489462135" MODIFIED="1664804667296" TEXT="ativo: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
<node CREATED="1638359284027" ID="ID_466137056" MODIFIED="1638359314864" TEXT="Cidade">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" ID="ID_1420173755" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_1781952612" MODIFIED="1664890602246" TEXT="Cidades">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1662577817043" MODIFIED="1662577867895" TEXT="searchable">
<icon BUILTIN="element"/>
<node CREATED="1662577843616" MODIFIED="1662577864459" TEXT="uf">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1662577889811" MODIFIED="1662577897084" TEXT="nome">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359378201" ID="ID_1929911762" MODIFIED="1638359380823" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638359404490" ID="ID_291387380" MODIFIED="1662577861232" TEXT="uf: UnidadeFederativa()">
<icon BUILTIN="Mapping.oneToOne"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1638359381521" MODIFIED="1662577861232" TEXT="codigo: Numero()">
<icon BUILTIN="Mapping.directToField"/>
<icon BUILTIN="bullet_key"/>
<node CREATED="1661879008714" MODIFIED="1661879013358" TEXT="@">
<node CREATED="1661879013360" MODIFIED="1661879058259" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359396953" MODIFIED="1638359426462" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1661879021246" MODIFIED="1661879023078" TEXT="@">
<node CREATED="1661879023080" MODIFIED="1661879058258" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1638359530287" ID="ID_1367925114" MODIFIED="1638359538822" TEXT="bairros: Bairro()">
<icon BUILTIN="Mapping.oneToMany"/>
</node>
<node CREATED="1638359530287" ID="ID_453385933" MODIFIED="1664888785192" TEXT="bairrosDesativados: Bairro()">
<icon BUILTIN="Mapping.oneToMany"/>
</node>
</node>
</node>
<node CREATED="1638359301163" MODIFIED="1638359314864" TEXT="Bairro">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661863917176" MODIFIED="1661863923928" TEXT="@">
<node CREATED="1661863923930" MODIFIED="1661863956131" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661863926903" ID="ID_30341975" MODIFIED="1664890606601" TEXT="Bairros">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1638359547222" ID="ID_1872804620" MODIFIED="1638359552250" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1638359585940" ID="ID_1214200350" MODIFIED="1664806174218" TEXT="cidade: Cidade()">
<icon BUILTIN="Mapping.manyToOne"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1638359554245" ID="ID_848917289" MODIFIED="1664806174218" TEXT="nome: Texto(64)">
<icon BUILTIN="Mapping.directToField"/>
<icon BUILTIN="bullet_key"/>
</node>
<node CREATED="1638359564925" ID="ID_923165042" MODIFIED="1638359617097" TEXT="cepPadrao: Numero(8)">
<icon BUILTIN="Mapping.directToField"/>
<node CREATED="1664806156260" ID="ID_396371740" MODIFIED="1664806157469" TEXT="@">
<node CREATED="1664806157470" ID="ID_1749331830" MODIFIED="1664806166651" TEXT="requerido">
<icon BUILTIN="element"/>
</node>
</node>
</node>
<node CREATED="1664806131349" ID="ID_770718631" MODIFIED="1664806150538" TEXT="ativo: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
</node>
</node>
<node CREATED="1638357498339" FOLDED="true" MODIFIED="1664470187935" POSITION="right" TEXT="servicos">
<icon BUILTIN="Package"/>
<node CREATED="1638357710437" MODIFIED="1638357712753" TEXT="@">
<node CREATED="1638357719046" MODIFIED="1638357727268" TEXT="titulo">
<icon BUILTIN="element"/>
<node CREATED="1638357728006" MODIFIED="1638357732299" TEXT="Servi&#xe7;os">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
</node>
<node CREATED="1661017582824" ID="ID_1270451619" MODIFIED="1664798887248" POSITION="right" TEXT="tutorial">
<icon BUILTIN="Package"/>
<node CREATED="1661017594402" MODIFIED="1661017771294" TEXT="Tutorial">
<icon BUILTIN="Descriptor.bean"/>
<node CREATED="1661017772157" ID="ID_1206769109" MODIFIED="1661017779570" TEXT="@">
<node CREATED="1661017780561" MODIFIED="1661017788878" TEXT="sqlLegado">
<icon BUILTIN="element"/>
<node CREATED="1661017790687" MODIFIED="1661017936973" TEXT="select t1.*&#xa;from table1 t1&#xa;where t1.flagged = 0&#xa;union all&#xa;select t1.*&#xa;from table1 t1&#xa;where t1.flagged = 1 and&#xa;      not exists (select 1&#xa;                  from table1 tt1&#xa;                  where tt1.account = t1.account and tt1.flagged = 0&#xa;                 );">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1661146088577" ID="ID_6365192" MODIFIED="1661146092782" TEXT="plural">
<icon BUILTIN="element"/>
<node CREATED="1661146094953" ID="ID_163388726" MODIFIED="1664891769984" TEXT="Tutoriais">
<icon BUILTIN="tag_green"/>
</node>
</node>
<node CREATED="1664891775868" ID="ID_1237154838" MODIFIED="1664891780244" TEXT="searchable">
<icon BUILTIN="element"/>
<node CREATED="1664891783773" ID="ID_1069210513" MODIFIED="1664891791530" TEXT="title">
<icon BUILTIN="tag_green"/>
</node>
<node CREATED="1664891785893" ID="ID_1151824445" MODIFIED="1664891791530" TEXT="description">
<icon BUILTIN="tag_green"/>
</node>
</node>
</node>
<node CREATED="1661017622530" MODIFIED="1661017631582" TEXT="atributos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661017635649" MODIFIED="1661017647125" TEXT="title: Texto()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661017649358" MODIFIED="1661017659591" TEXT="description: Texto()">
<icon BUILTIN="Mapping.directToField"/>
</node>
<node CREATED="1661017660146" MODIFIED="1661017673005" TEXT="published: Boolean()">
<icon BUILTIN="Mapping.directToField"/>
</node>
</node>
<node CREATED="1661017984260" FOLDED="true" ID="ID_763632813" MODIFIED="1664799580931" TEXT="metodos">
<icon BUILTIN="Descriptor.grouping"/>
<node CREATED="1661017990135" MODIFIED="1661018031118" TEXT="nomesContasAtivas">
<icon BUILTIN="Method.public"/>
<node CREATED="1661018043619" MODIFIED="1661018045721" TEXT="body">
<node CREATED="1661018233839" MODIFIED="1661018238794" TEXT="QUERY()">
<node CREATED="1661018320092" MODIFIED="1661018325002" TEXT="SELECT">
<node CREATED="1661018243169" MODIFIED="1661018254859" TEXT="COLUMNS">
<node CREATED="1661018257543" MODIFIED="1661018272030" TEXT="t1.*"/>
</node>
<node CREATED="1661018275952" MODIFIED="1661018292272" TEXT="FROM">
<node CREATED="1661018277998" MODIFIED="1661018286395" TEXT="t1">
<node CREATED="1661018293856" MODIFIED="1661124180799" TEXT="table1"/>
</node>
</node>
<node CREATED="1661018343652" MODIFIED="1661018346799" TEXT="WHERE">
<node CREATED="1661018347224" MODIFIED="1661018351050" TEXT="=">
<node CREATED="1661018382895" MODIFIED="1661018419308" TEXT="t1.flagged"/>
<node CREATED="1661018392613" MODIFIED="1661018397729" TEXT="o"/>
</node>
</node>
</node>
<node CREATED="1661018445088" MODIFIED="1661018453912" TEXT="UNION ALL"/>
<node CREATED="1661018320092" MODIFIED="1661018325002" TEXT="SELECT">
<node CREATED="1661018243169" MODIFIED="1661018254859" TEXT="COLUMNS">
<node CREATED="1661018257543" MODIFIED="1661018272030" TEXT="t1.*"/>
</node>
<node CREATED="1661018275952" MODIFIED="1661018292272" TEXT="FROM">
<node CREATED="1661018277998" MODIFIED="1661018286395" TEXT="t1">
<node CREATED="1661018293856" MODIFIED="1661018298964" TEXT="table1"/>
</node>
</node>
<node CREATED="1661018343652" MODIFIED="1661018346799" TEXT="WHERE">
<node CREATED="1661018502124" MODIFIED="1661018504928" TEXT="and">
<node CREATED="1661018347224" MODIFIED="1661018351050" TEXT="=">
<node CREATED="1661018382895" MODIFIED="1661018421678" TEXT="t1.flagged"/>
<node CREATED="1661018392613" MODIFIED="1661018493413" TEXT="1"/>
</node>
<node CREATED="1661018509486" MODIFIED="1661018519353" TEXT="notExists()">
<node CREATED="1661018539251" MODIFIED="1661018543935" TEXT="QUERY()">
<node CREATED="1661019109655" MODIFIED="1661019112729" TEXT="SELECT">
<node CREATED="1661019114981" MODIFIED="1661019134046" TEXT="COLUMNS">
<node CREATED="1661019163631" MODIFIED="1661019224914" TEXT="1"/>
</node>
<node CREATED="1661019122421" MODIFIED="1661019124009" TEXT="FROM">
<node CREATED="1661019176198" MODIFIED="1661019177832" TEXT="tt1">
<node CREATED="1661019179471" MODIFIED="1661019182733" TEXT="table1"/>
</node>
</node>
<node CREATED="1661019125280" MODIFIED="1661019127050" TEXT="WHERE">
<node CREATED="1661019303062" MODIFIED="1661124242900" TEXT="and">
<node CREATED="1661019187782" MODIFIED="1661019190685" TEXT="=">
<node CREATED="1661019192837" MODIFIED="1661019277845" TEXT="tt1.account"/>
<node CREATED="1661019208615" MODIFIED="1661019286090" TEXT="t1.account"/>
</node>
<node CREATED="1661019317018" MODIFIED="1661019319422" TEXT="=">
<node CREATED="1661019320186" MODIFIED="1661019333277" TEXT="t1.flagged"/>
<node CREATED="1661019334629" MODIFIED="1661019335866" TEXT="0"/>
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
<node CREATED="1661018211047" MODIFIED="1661018213593" TEXT="onCreate"/>
</node>
</node>
</node>
</node>
</map>
