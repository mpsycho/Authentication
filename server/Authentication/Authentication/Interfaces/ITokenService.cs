using Authentication.Entities;

namespace Authentication.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
