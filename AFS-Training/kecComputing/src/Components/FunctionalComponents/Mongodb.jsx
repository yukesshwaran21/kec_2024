const Mongodb = () => {
  return (
    <div>
    //Task 1
    <div>
      <p>When we update the already inserted records as same values, it will give the matchedCount: 1 and modifiedCount: 0.</p>

      <p>
        {`db.users.updateOne({Name:"Pooja"},{$set:{Age:"19",Email:"Pooja@gmail.com"}})
        {
          acknowledged: true,
          insertedId: null,
          matchedCount: 1,
          modifiedCount: 0,
          upsertedCount: 0
        }`}
      </p>
    </div>
    //Task 2
    <div>
      <p>In this when we upsert the _id changes after that when we used to insert a record using insertOne command the _id continues</p>
      <p>
        {`{
          _id: ObjectId('6776a90d7a36644573a7ea79'),
          Name: 'Pooja',
          Age: '19',
          Email: 'Pooja@gmail.com'
        }`}
      </p>
      <p>
        {`{
          _id: ObjectId('6776a95e7a36644573a7ea7a'),
          FName: 'Santhapriyan',
          LName: 'Subramani',
          Dept: 'IT'
        }`}
      </p>
      <p>
        {`{
          _id: ObjectId('6776a9cc7a36644573a7ea7b'),
          Name: 'krishna',
          Age: '24',
          Email: 'Krishna@gmail.com'
        }`}
      </p>
      <p>
        {`{
          _id: ObjectId('6776a9cc7a36644573a7ea7c'),
          FName: 'Santhiya',
          LName: 'Elango',
          Dept: 'AIML'
        }`}
      </p>
      <p>
        {`db.users.updateOne({Name:"Sangeetha"},{$set:{Age:"23"}},{upsert:true})
        {
          acknowledged: true,
          insertedId: ObjectId('6776aba7ec38fc155500a9ab'),
          matchedCount: 0,
          modifiedCount: 0,
          upsertedCount: 1
        }`}
      </p>
      <p>
        {`db.users.insertOne({Name:"Ram",Age:"20",Email:"Ram@gmail.com"})
        {
          acknowledged: true,
          insertedId: ObjectId('6776abda7a36644573a7ea7d')
        }`}
      </p>
    </div>
    //Task 3
    <div>
        <h4>Delete the record using _id:</h4>
        <p>We can delete the record using _id also</p>
        <p>{`db.users.deleteOne({_id: ObjectId('6776a9cc7a36644573a7ea7b')})
           {
            acknowledged: true,
            deletedCount: 1
          }`}
        </p>

    </div>
    </div>
  );
};

export default Mongodb;
