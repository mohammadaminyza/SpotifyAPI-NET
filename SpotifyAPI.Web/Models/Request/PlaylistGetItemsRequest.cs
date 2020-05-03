using System.Collections.Generic;

namespace SpotifyAPI.Web
{
  public class PlaylistGetItemsRequest : RequestParams
  {
    public PlaylistGetItemsRequest()
    {
      AdditionalTypes = new List<string>() { "track", "episode" };
    }

    [QueryParam("fields")]
    public List<string> Fields { get; set; }

    [QueryParam("limit")]
    public int? Limit { get; set; }

    [QueryParam("offset")]
    public int? Offset { get; set; }

    [QueryParam("market")]
    public string Market { get; set; }

    /// <summary>
    ///   This is set to `"track", "episode"` by default.
    /// </summary>
    /// <value></value>
    [QueryParam("additional_types")]
    public List<string> AdditionalTypes { get; set; }
  }
}
