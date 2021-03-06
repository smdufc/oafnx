var stages = stages || {};
stages.supermercado = {
  "type": "oa-scheme",
  "name": "Supermercado",
  "folder_name": "supermarket",
  "description": "Módulo Supermercado",
  "author": "Felipe Almeida",
  "author_link": "http://falmeida.co",
  "author_email": "contato@falmeida.co",
  "content": {
    "files": [
      {
        "name": "icone_padrao",
        "title": "Ícone padrão",
        "type": "image/png",
        "src": "files/main-icon.png"
      },
      {
        "name": "situacao1_item1",
        "title": "Arroz",
        "type": "image/png",
        "src": "files/pacote.png"
      },
      {
        "name": "situacao1_item2",
        "title": "Valor",
        "type": "image/png",
        "src": "files/moeda.png"
      }
    ],
    "properties": {
      "name": "Supermercado",
      "nicename": "supermercado",
      "welcome_prefix": "Bem vindo ao",
      "description": "",
      "icon_default": "icone_padrao",
      "icon_hover": "icone_padrao"
    },
    "situations": [
      {
        "name": "Arroz",
        "title": "Comprar 4kg de arroz",
        "description": "Você precisa comprar <strong>4kg de arroz</strong>. Cada pacote de arroz tem <strong>1kg</strong>. Cada kg de arroz custa <strong>R$ 3,00</strong>. Complete a tabela com o valor correspondente à quantidade de pacotes de arroz.",
        "table_size": 2,
        "item_1": {
          "icon_default": "situacao1_icone1",
          "name": "Arroz",
          "unit": "kg",
          "start_value": 1,
          "min_value": 1,
          "max_value": 10,
          "relation": 3
        },
        "item_2": {
          "icon_default": "situacao1_icone2",
          "name": "Moeda",
          "unit": "R$",
          "start_value": 3,
          "min_value": 1,
          "max_value": 15,
          "relation": 0.33
        },
        "stars": 1
      }
    ]
  }
}
