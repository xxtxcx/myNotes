using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyNotes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MyNotes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NoteContext _context;

        public NotesController(NoteContext context)
        {
            _context = context;
        }


        // GET: api/Notes - получение всех заметок
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NoteDTO>>> GetNotes()
        {
            return await _context.Notes
                .Select(x => ItemToDTO(x))
                .ToListAsync();
        }


        // GET: api/Notes/{id} - получение заметки по id
        [HttpGet("{id}")]
        public async Task<ActionResult<NoteDTO>> GetNote(long id)
        {
            var note = await _context.Notes.FindAsync(id);

            if (note == null)
            {
                return NotFound();
            }

            return ItemToDTO(note);
        }

        // PUT: api/Notes/{id} - редактирование заметки по id
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNote(long id, NoteDTO noteDTO)
        {
            if (id != noteDTO.Id)
            {
                return BadRequest();
            }

            var note = await _context.Notes.FindAsync(id);
            if (note == null)
            {
                return NotFound();
            }

            note.Title = noteDTO.Title;
            note.Desc = noteDTO.Desc;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException) when (!NoteExists(id))
            {
                return NotFound();
            }

            return NoContent();
        }


        // POST: api/Notes - создание новой заметки
        [HttpPost]
        public async Task<ActionResult<NoteDTO>> CreateNote(NoteDTO noteDTO)
        {
            var note = new Note
            {
                Title = noteDTO.Title,
                Desc = noteDTO.Desc
            };

            _context.Notes.Add(note);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetNote),
                new { id = note.Id },
                ItemToDTO(note));
        }


        // DELETE: api/Notes/{id} - удаление заметки по id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(long id)
        {
            var note = await _context.Notes.FindAsync(id);

            if (note == null)
            {
                return NotFound();
            }

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NoteExists(long id) =>
             _context.Notes.Any(e => e.Id == id);

        private static NoteDTO ItemToDTO(Note note) =>
            new NoteDTO
            {
                Id = note.Id,
                Title = note.Title,
                Desc = note.Desc
            };
    }

}
