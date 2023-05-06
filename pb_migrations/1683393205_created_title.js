migrate((db) => {
  const collection = new Collection({
    "id": "izlt7q05zrkfyt3",
    "created": "2023-05-06 17:13:25.702Z",
    "updated": "2023-05-06 17:13:25.702Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nve3mjjh",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("izlt7q05zrkfyt3");

  return dao.deleteCollection(collection);
})
