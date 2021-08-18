﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookShopApp.Models
{
    public class Book
    {
        [Key]
        public int ID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(200)")]
        public string Text { get; set; }
        [Column(TypeName = "float")]
        public double PurchasePrice { get; set; }
    }
}
