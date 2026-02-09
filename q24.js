db.courses.aggregate([
  {
    $lookup: {
      from: "modules",
      let: { courseId: "$_id" },
      pipeline: [
        {$match: {$expr: {$eq: ["$courseId", "$$courseId"]}}},
        {lookup:{
            from:"lessions",
            let:{moduleId:"$_id"},
            pipeline:[
                {$match: {$expr: {$eq: ["$moduleId", "$$moduleId"]}}},
            ],
            as:"lessions"

        }}
      ],
      as: "modules"
    }
  }
])

