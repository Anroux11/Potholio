using Potholio.Debugging;

namespace Potholio
{
    public class PotholioConsts
    {
        public const string LocalizationSourceName = "Potholio";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "f3161a295aa24090961bac2878bff6d3";
    }
}
