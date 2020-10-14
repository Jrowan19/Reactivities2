// using System.Threading;
// using System.Threading.Tasks;
// using Domain;
// using MediatR;
// using Microsoft.AspNetCore.Identity;
// using Persistence;

// namespace Application.User
// {
//     public class Login
//     {
//         public class Query : IRequest<AppUser>
//         {

//             public string Email { get; set; }

//             public string Password { get; set; }
//         }


//         //validation to be added later
//         // public class QueryValidator : AbstractValidator<Query>
//         // {

//         //     public QueryValidator()
//         //     {

//         //         RuleFor(x => x.Email).NotEmpty();
//         //         RuleFor(x => x.Password).NotEmpty();
//         //     }

//         // }

//         public class Handler : IRequestHandler<Query, AppUser>
//         {
//             private readonly UserManager<AppUser> _userManager;
//             private readonly SignInManager<AppUser> _signInManager;

//             public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
//             {
//                 _signInManager = signInManager;
//                 _userManager = userManager;

//             }

//             public async Task<AppUser> Handle(Query request,
//             CancellationToken cancellationToken)
//             {


// //need to complete the validation section first 
//             //     var user = await _userManager.FindByEmailAsync(request.Email);

//             //     if (user == null))
//             //     throw new RestException(HttpStatusCode.Unauthorized);
//             // }

//             // var result = await _signInManager.CheckPasswordSignInAsync(User, RequestHandler.Password, false)

//             // if (result.Succeeded)
//             // {
//             //     //gen token
//             //     return user
//             // }

//             // throw new RestException(HttpStatusCode.Unauthorized);
//         }
//     }
// }