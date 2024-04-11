# MLD

## 3 types d'associations

- `One-to-One` : 1 seul objet de la table A peut être associé à 1 seul objet de la table B (cardinalité max 1:1)
- `One-to-Many` : 1 seul objet de la table A peut être associé à plusieurs objets de la table B (cardinalité max 1:n)
- `Many-to-Many` : plusieurs objets de la table A peuvent être associés à plusieurs objets de la table B (cardinalité max n:n)

### One-to-One

Il suffit d'ajouter une colonne dans une des tables pour stocker l'identifiant de l'autre table.

### One-to-Many

Il suffit de stocker une clé étrangère dans une des deux tables. (celle qui a le cardinalité max 1)

### Many-to-Many

Il faut créer une table de jointure (table de liaison) qui va stocker les identifiants des deux tables.


## Notre cas

```md
user (
  id
  firstname
  lastname
  email
  password
)

quiz (
  id
  title
  description
  author_id: #user(id) -- clé étrangère qui pointe vers la clé primaire de la table user
)

tag (
  id
  name
)

question (
  id
  description
  wiki
  anecdote
  quiz_id: #quiz(id)
  level_id: #level(id)
  answer_id: #answer(id) -- La bonne réponse
)

level (
  id
  name
)

answer (
  id
  description
  question_id: #question(id)
)

quiz_has_tag (
  id
  quiz_id: #quiz(id)
  tag_id: #tag(id)
)
```
