from constants import common

from ..Latin.translation import paternoster, titles, transformations


section_labels = {
    'Communicantes': 'Communicantes',
    'CommunioP': 'Comúnio',
    'Communio': 'Comúnio',
    'Evangelium': 'Evangelho',
    'GradualeP': 'Gradual',
    'Graduale': 'Gradual',
    'Introitus': 'Intróito',
    'Lectio': 'Epistola',
    'OffertoriumP': 'Ofertório',
    'Offertorium': 'Ofertório',
    'Oratio': 'Oração',
    'Commemoratio Oratio': 'Oração Comemoração',
    'Postcommunio': 'Postcomúnio',
    'Commemoratio Postcommunio': 'Postcomúnio Comemoração',
    'Secreta': 'Secreta',
    'Commemoratio Secreta': 'Secreta Comemoração',
    'Sequentia': 'Sequência',
    'Super populum': 'Oração sobre o povo',
    'Prefatio': 'Prefácio',
    'Tractus': 'Gradual',
    # 02-02, feast of the Purification of the B.V.M.
    'De Benedictione Candelarum': 'Benção Velas',
    'De Distributione Candelarum': 'Distribuição Velas',
    'De Processione': 'Procissão',
    # Quad6-0r, Dominica II Passionis seu in Palmis
    'Benedictio Palmorum': 'Benção Ramos',
    'De distributione ramorum': 'Distribuição Ramos',
    'De lectione Evangelica': 'Leitura do Evangelho',
    'De processione cum ramis benedictis': 'Procissão dos Ramos Benzidos',
    'Hymnus ad Christum Regem': 'Hino a Cristo Rei',
    # Quad6-4r, Feria Quinta in Coena Domini
    'Maundi': 'Mandatum, czyli Umywanie Nóg',
    'Post Missam': 'Uroczyste Przeniesienie i Złożenie Najświętszego Sakramentu',
    'Denudatione altaris': 'Desnudação dos Altares',
    # Quad6-5r, Feria Sexta in Parasceve
    'Lectiones': 'Część Pierwsza: Czytania',
    'Passio': 'Paixão',
    'Oratio Fidelium': 'Część Druga: Uroczyste Modły zwane «Modlitwą Wiernych»',
    'Crucis Adoratione': 'Część Trzecia: Uroczysta Adoracja Krzyża',
    'CommunioQ': 'Część Czwarta: Komunia Święta',
    # Quad6-5r, Sabbato Sancto
    'Benedictio ignis': 'Benção nowego ognia',
    'De benedictione cerei Paschalis': 'Benção Paschału',
    'De solemni processione': 'Uroczysta Procesja',
    'De praeconio paschali': 'Orędzie Wielkanocne',
    'De lectionibus': 'Czytania',
    'De prima parte Litaniarum': 'Pierwsza Część Litanii',
    'De benedictione aquae baptismalis': 'Benção Wody Chrzcielnej',
    'De renovatione promissionum baptismatis': 'Odnowienie Przyrzeczeń Chrztu Świętego',
    'De altera parte Litaniarum': 'Druga Część Litanii',
    'De Missa solemni Vigiliae paschalis': 'Uroczysta Msza Rezurekcyjna',
    'Pro Laudibus': 'Laudes',
    'Conclusio': 'Conclusão',
    'Benedictio cinerum': 'Benção Cinzas'

}

section_labels_multi = {
    'GradualeL1': 'Gradual',
    'GradualeL2': 'Gradual',
    'GradualeL3': 'Gradual',
    'GradualeL4': 'Gradual',
    'GradualeL5': 'Gradual',
    'Graduale': 'Gradual',
    'LectioL1': 'Lekcja',
    'LectioL2': 'Lekcja',
    'LectioL3': 'Lekcja',
    'LectioL4': 'Lekcja',
    'LectioL5': 'Lekcja',
    'Lectio': 'Lekcja',
    'OratioL1': 'Oração',
    'OratioL2': 'Oração',
    'OratioL3': 'Oração',
    'OratioL4': 'Oração',
    'OratioL5': 'Oração',
    'Oratio': 'Oração'
}
