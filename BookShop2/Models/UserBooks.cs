using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookShopApp.Models
{
    public class UserBook
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName = "int")]
        public int BookID { get; set; }
        [Column(TypeName = "int")]
        public int UserID { get; set; }

    }
}
