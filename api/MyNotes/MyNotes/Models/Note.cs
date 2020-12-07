using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyNotes.Models
{
        public class Note
        {
            public long Id { get; set; } //идентификатор 
            public string Title { get; set; } //заголовок
            public string Desc { get; set; } //содержание
            public string Secret { get; set; } //секретное поле
        
        }
}

