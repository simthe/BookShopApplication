using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookShopApp.Models;

namespace BookShopApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserBookController : ControllerBase
    {
        private readonly BookShopContext _context;

        public UserBookController(BookShopContext context)
        {
            _context = context;
        }

        // GET: api/UserBook/5
        [HttpGet("{userID}")]
        public async Task<ActionResult<IEnumerable<int>>> GetUserBooks(int userID)
        {
            var userBooks = await _context.UserBooks.Where(x => x.UserID == userID).Select(x => x.BookID).ToListAsync();

            if (userBooks == null)
            {
                return NotFound();
            }

            return userBooks;
        }

        // PUT: api/UserBook/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserBook(int id, UserBook userBook)
        {
            if (id != userBook.ID)
            {
                return BadRequest();
            }

            _context.Entry(userBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserBookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserBook
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserBook>> PostUserBook(UserBook userBook)
        {
            _context.UserBooks.Add(userBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserBook", new { id = userBook.ID }, userBook);
        }

        // DELETE: api/UserBook/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserBook>> DeleteUserBook(int id)
        {
            var userBook = await _context.UserBooks.FindAsync(id);
            if (userBook == null)
            {
                return NotFound();
            }

            _context.UserBooks.Remove(userBook);
            await _context.SaveChangesAsync();

            return userBook;
        }

        private bool UserBookExists(int id)
        {
            return _context.UserBooks.Any(e => e.ID == id);
        }
    }
}
